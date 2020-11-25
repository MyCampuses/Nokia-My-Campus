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
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {navigate, useQueryParams} from "hookrouter";

/*eslint-enable */

const ParkingHistory = () => {
	const { isLoggedIn } = Authentication();
	const {getParkingStatus, getParkingData} = API();
	const {formattedFullDate} = GlobalFunctions();
	
	const [data, setData] = useState(null);
	const [capacity, setCapacity] = useState(null);
	const [selectedDate, setSelectedDate] = useState(() => {
		let d = new Date();
		d.setDate(d.getDate()-1);
		return d;
	});
	
	const params = useQueryParams();
	console.log(params);
	
	const zone = params[0].zone;
	
	useEffect(() => {
		getParkingData(zone, formattedFullDate(selectedDate)).then(json => {
			console.log(json)
			setData(json);
		});
		getParkingStatus(zone).then(json => {
			setCapacity(json.capacity);
		});
	}, [selectedDate]);
	
	
	
	
    const ParkingHistoryPage = () => {
		const {TopNavigationBar} = NaviBar();
		const {onItemClickNavigate} = GlobalFunctions();
		return (
			<div>
				{TopNavigationBar()}
				<Box height="48px" display="flex" alignItems="center" padding="16px">
					<Typography variant="subtitle2" component="h1" align="left">Parking history</Typography>
				</Box>
				<Box px={2}>
					{PredictiveChartFragment(data, null, capacity)}
					<Grid container justify="space-between">
						<Button variant="outlined" align="left" onClick={()=>{
									selectedDate.setDate(selectedDate.getDate()-1);
									setData(null);
									setSelectedDate(new Date(selectedDate));
								}}>
							&lt;
						</Button>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<DatePicker
								style={{color: "black"}}
								margin="normal"
								id="dialog date picker"
								format="dd/MM/yyyy"
								value={selectedDate}
								disableFuture={true}
								onChange={setSelectedDate}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
						</MuiPickersUtilsProvider>
						<Button variant="outlined" align="right" onClick={()=>{
									selectedDate.setDate(selectedDate.getDate()+1);
									setData(null);
									setSelectedDate(new Date(selectedDate));
								}}>
							&gt;
						</Button>
					</Grid>
				</Box>
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
