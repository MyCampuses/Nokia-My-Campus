import React from 'react';
import ParkingCardFragment from "../fragments/ParkingCardFragment";
import API from '../hooks/ApiHooks';
import Button from '@material-ui/core/Button';
import strings from '../localization';
import GlobalFunctions from '../hooks/GlobalFunctions';

const ParkingWidget = (data) =>  {
    const {onItemClickNavigate} = GlobalFunctions();
	if (data.dataType !== 'parking') {
		return;
	}
	const {getParkingAreaName} = API();
	data.name = getParkingAreaName(data.zone);
	const estimated = data.zone === 'P10EV';
	
	return [
		ParkingCardFragment().singleAreaWidget({id: data.zone, name: data.name, usageData: data.data, estimate: estimated}),
		(<Button onClick={()=>onItemClickNavigate('/parking')}>{strings.parkingViewAll}</Button>)
	];
};

export default ParkingWidget;
