/* eslint-disable no-unused-vars */

import React, {useState, useEffect} from 'react';
import '../styles/App.css';
import '../styles/p10Style.css';
import 'date-fns';
import NaviBar from '../fragments/TopNavigationBarFragment';
import Authentication from '../hooks/Authentication';
import AuthLoading from './authLoading';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextDataTable from "../fragments/TextDataTableFragment";
import PredictiveChartFragment from "../fragments/PredictiveChartFragment";
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import strings from '../localization';
import GlobalFunctions from '../hooks/GlobalFunctions';
import { useQueryParams } from "hookrouter";

/*eslint-enable */

const ParkingHistory = () => {
	const { isLoggedIn } = Authentication();
	const {getParkingStatus, getParkingData} = API();
	
	const [data, setData] = useState(null);
	const [firstRender, setFirstRender] = useState(true);
	
	const params = useQueryParams();
	console.log(params);
	
	const zone = params[0].zone;
	const date = params[0].date;
	console.log(zone);
	
	if (firstRender) {
		setFirstRender(false);
		getParkingData(zone, date).then(json => {
			console.log(json)
			setData(json);
		});
	}
	
	
	
    const ParkingHistoryPage = () => {
		const {TopNavigationBar} = NaviBar();
		//const {onItemClickNavigate} = GlobalFunctions();
		return (
			<div>
				{TopNavigationBar()}
				{PredictiveChartFragment(data, null, null)}
			</div>
		);
    }
	if (isLoggedIn()) {
		return ParkingHistoryPage();
	} else {
		return <AuthLoading/>;
	}
		
};

export default ParkingHistory;
