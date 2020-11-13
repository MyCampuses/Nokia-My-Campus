/* eslint-disable no-unused-vars */

import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/p10Style.css';
import 'date-fns';
import NaviBar from '../fragments/TopNavigationBarFragment';
import Authentication from '../hooks/Authentication';
import API from '../hooks/ApiHooks';
import ApiUrls from '../hooks/ApiUrls';
import AuthLoading from './authLoading';
import ParkingCardFragment from "../fragments/ParkingCardFragment";

/*eslint-enable */

class Parking extends Component {
	constructor(props) {
		super(props);
		const {getChartData, dataToChart, chartEstData, dataToChartRestaurant, getUsageDataNoProps} = API();
		const {apiUrl} = ApiUrls();
		this.state = {data: [
			{
				"name": "P5",
				"zones": {
					"parking": [
						{
							"name": "inside",
							"id": "P5"
						}
					]
				}
			},
			{
				"name": "P10",
				"zones": {
					"parking": [
						{
							"name": "inside",
							"id": "P10"
						},
						{
							"name": "roof",
							"id": "P10TOP"
						}
					],
					"ev_charging": [
						{
							"name": "roof",
							"estimate": true,
							"linkId": "P10EV"
						}
					]
				}
			}
		]};
		
		this.state.data.forEach((area, aindex, aarray) => {
			area.zones.parking.forEach((zone, zindex, zarray) => {
				
				getUsageDataNoProps((apiUrl+'parking/status/'+zone.id)).then( usageData => {
					usageData.count = Math.max(Math.min(usageData.capacity, usageData.count), 0);
					zarray[zindex].usageData = usageData;
					aarray[aindex].zones.parking = zarray;
					if (zone.id == 'P10TOP') {
						let p10ev = {count: Math.min(98, Math.floor(usageData.count * 2.1)), capacity: 98};
						area.zones.ev_charging.forEach((evzone, evindex, evarray) => {
							if (evzone.name == 'roof') {
								evzone.usageData = p10ev;
								evarray[evindex] = evzone;
							}
						});
					}
					this.setState({ state: this.state });
				});
			});
		});
	}
	
	render() {
		const {isLoggedIn} = Authentication();
		const {TopNavigationBar} = NaviBar();
		
		const ParkingPage = () => {
			let cards = [];
			this.state.data.forEach(area => {
				cards.push(ParkingCardFragment(area));
			});
			return (
				<div>
					{TopNavigationBar()}
					{cards}
				</div>
			);
		};
		const AuthParking = () => { //eslint-disable-line
			if (isLoggedIn()) {
				return <ParkingPage/>;
			} else {
				return <AuthLoading/>;
			}
		};

		return (
			<AuthParking/>
		);
	}
};

export default Parking;
