/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
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

const Parking = () => {
	const { getUsageDataNoProps} = API();
	const {apiUrl} = ApiUrls();
	
	const [firstRender, setFirstRender] = useState(true);
	const [updater] = useState(false);
	
	const [data, setData] = useState([{
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
	]);
		
		
	if (firstRender) {
		setFirstRender(false);
		data.forEach((area, aindex) => {
			area.zones.parking.forEach((zone, zindex) => {
				getUsageDataNoProps((apiUrl+'parking/status/'+zone.id)).then( usageData => {
					usageData.count = Math.max(Math.min(usageData.capacity, usageData.count), 0);
					data[aindex].zones.parking[zindex].usageData = usageData;
					if (zone.id === 'P10TOP') {
						let p10ev = {count: Math.min(98, Math.floor(usageData.count * 2.1)), capacity: 98};
						area.zones.ev_charging.forEach((evzone, evindex) => {
							if (evzone.name === 'roof') {
								data[aindex].zones.ev_charging[evindex].usageData = p10ev;
							}
						});
					}
					setData([...data]);
				});
			});
		});
	}
	
	
	const {isLoggedIn} = Authentication();
	const {TopNavigationBar} = NaviBar();
	
	const ParkingPage = () => {
		let cards = [];
		data.forEach(area => {
			cards.push(ParkingCardFragment().fullCard(area));
		});
		return (
			<div>
				{updater}
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
	
};

export default Parking;
