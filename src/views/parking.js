/* eslint-disable no-unused-vars */

import React from 'react';
import '../styles/App.css';
import '../styles/p10Style.css';
import 'date-fns';
import NaviBar from '../fragments/TopNavigationBarFragment';
import Authentication from '../hooks/Authentication';
import AuthLoading from './authLoading';
import BottomBarTabFragment from "../fragments/BottomBarFragment";
import ParkingCardFragment from "../fragments/ParkingCardFragment";
import {ThemeProvider} from "@material-ui/core";
import ProgressBarStyle from "../styles/progressBarStyle";

/*eslint-enable */

const Parking = () => {
    const {isLoggedIn} = Authentication();
    const {TopNavigationBar} = NaviBar();
	let lastUpdate;
    let parkingTopology = [
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
						"name": "roof"
					}
				]
		    }
		}
	]
	
	const updateParkingData = () => {
		const addDataToZone = (zone) => {
			if ("id" in zone) {
				
			}
		}
		for (let i = 0; i < parkingTopology.length; i++) {
			
		}
	}

    const ParkingPage = () => {
        return (
			<div>
				{TopNavigationBar()}
				{ParkingCardFragment(parkingTopology[0])}
				{ParkingCardFragment(parkingTopology[1])}
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
