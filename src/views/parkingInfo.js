/* eslint-disable no-unused-vars */

import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/p10Style.css';
import 'date-fns';
import NaviBar from '../fragments/TopNavigationBarFragment';
import Authentication from '../hooks/Authentication';
import AuthLoading from './authLoading';
import BottomBarTabFragment from "../fragments/BottomBarFragment";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import strings from '../localization';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextDataTable from "../fragments/TextDataTableFragment";
import PredictiveChartFragment from "../fragments/PredictiveChartFragment";
import {ThemeProvider} from "@material-ui/core";
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import GlobalFunctions from '../hooks/GlobalFunctions';

/*eslint-enable */

class ParkingInfo extends Component {
	constructor(props) {
		super(props);
		const {getChartData, dataToChart, chartEstData, dataToChartRestaurant, getUsageDataNoProps} = API();
		const {apiUrl} = ApiUrls();
		const {dailyParkingUrl} = ApiUrls();
        const {formattedFullDate} = GlobalFunctions();
		
		const zone = window.location.pathname.split('/').pop();
		
		this.state = {tableData: [["Total spaces", ""], ["Spaces in use", ""], ["Available spaces", ""]], zone: zone};
		
		
		let expectedDataDate = new Date();
		
		//P10EV has no API endpoint, create data manually based on P10TOP
		if (zone === 'P10EV') {
			const convertToP10EV = (json) => {
				console.log(json);
				let p10ev = [];
				json.samples.forEach(sample => {
					const newcount = Math.min(98, Math.floor(sample["count"] * 2.1));
					p10ev.push({count: newcount, date: sample["date"], percent: Math.floor(newcount/98)});
				});
				json["samples"] = p10ev;
				console.log(json);
				return json;
			}
			getUsageDataNoProps((apiUrl+'parking/status/P10TOP/')).then( usageData => {
				const count = Math.min(98, Math.floor(usageData["count"] * 2.1));
				this.setState({tableData: [["Total spaces", "98"], ["Spaces in use", ""+count], ["Available spaces", ""+(98-count)]], capacity: 98});
			});
			
			getChartData(dailyParkingUrl, 'P10TOP/', formattedFullDate(new Date())).then(json => {
				
				this.setState({dataToday: convertToP10EV(json)});
			});
			
			expectedDataDate.setDate(expectedDataDate.getDate() - 7);
			getChartData(dailyParkingUrl, 'P10TOP/', formattedFullDate(expectedDataDate)).then(json => {
				
				this.setState({dataWeekAgo: convertToP10EV(json)});
			});
		} else {
			getUsageDataNoProps((apiUrl+'parking/status/'+zone+'/')).then( usageData => {
				this.setState({tableData: [["Total spaces", ""+usageData["capacity"]], ["Spaces in use", ""+usageData["count"]], ["Available spaces", ""+(usageData["capacity"]-usageData["count"])]], capacity: usageData["capacity"]});
			});
			
			getChartData(dailyParkingUrl, zone+'/', formattedFullDate(new Date())).then(json => {
				this.setState({dataToday: json});
			});
			
			expectedDataDate.setDate(expectedDataDate.getDate() - 7);
			getChartData(dailyParkingUrl, zone+'/', formattedFullDate(expectedDataDate)).then(json => {
				this.setState({dataWeekAgo: json});
			});
		}
		
		
		
	}
	
    render() {
		const {isLoggedIn} = Authentication();
		const {TopNavigationBar} = NaviBar();
		const {onItemClickNavigate} = GlobalFunctions();
		const ParkingInfoPage = () => {
			return (
				<div>
					{TopNavigationBar()}
					<Box height="48px" display="flex" alignItems="center" padding="16px">
						<Typography variant="subtitle2" component="h1" align="left">Parking info</Typography>
					</Box>
					<Box px={2}>
						<TextDataTable data={this.state.tableData}/>
						{PredictiveChartFragment(this.state.dataToday, this.state.dataWeekAgo, this.state.capacity)}
						{/*<Grid container>
							<Button variant="outlined" align="left" onClick={()=>onItemClickNavigate('/parkinghistory/'+this.state.zone)}>
								{strings.history}
							</Button>
						</Grid>*/}
					</Box>
				</div>
			);
		};
		if (isLoggedIn()) {
			return <ParkingInfoPage/>;
		} else {
			return <AuthLoading/>;
		}
		
    }
};

export default ParkingInfo;
