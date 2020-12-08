import React, {useState, useEffect} from 'react';
import ParkingCardFragment from "../fragments/ParkingCardFragment";
import API from '../hooks/ApiHooks';
import Button from '@material-ui/core/Button';
import strings from '../localization';
import GlobalFunctions from '../hooks/GlobalFunctions';
import Grid from '@material-ui/core/Grid';

const ParkingWidget = (data) =>  {

	const [parkingStatus, setParkingStatus] = useState({});
	const small = ("gridLayout" in data && data.gridLayout === true);

	useEffect(() => {
		console.log(data);
		if ("zones" in data) {
			(data.zones).forEach((zone) => {
				getParkingStatus(zone).then( status => {
					parkingStatus[zone] = status;
					setParkingStatus({...parkingStatus});
				});
			});
		};

	}, []); //eslint-disable-line


    const {onItemClickNavigate} = GlobalFunctions();
	const {getParkingAreaName, getParkingStatus} = API();
	
	data.name = getParkingAreaName(data.zone);
	
	let elements = [];
	
	(data.zones).forEach((zone) => {
		const name = getParkingAreaName(zone);
		const estimated = zone === 'P10EV';
		const loading = parkingStatus[zone] !== undefined;
		elements.push(ParkingCardFragment().singleAreaWidget({id: zone, name: name, usageData: parkingStatus[zone], estimate: estimated, loading: loading}, small));

	});
	
	if ("showAllButton" in data && data.showAllButton === true) {
		elements.push(<Button onClick={()=>onItemClickNavigate('/parking')}>{strings.parkingViewAll}</Button>);
	};
	
	if (small) {
		elements.forEach((element, index, array) => {
			array[index] = (<Grid item xs={6}>{element}</Grid>);
		});
		elements = (<Grid container>{elements}</Grid>);
	};

	return elements;
};

export default ParkingWidget;