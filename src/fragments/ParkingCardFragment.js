
import React, {Fragment, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

const ParkingCardFragment = (data) => {
	const zones = (zoneData, category) => {
		console.log("category "+category)
		if (category in zoneData) {
			let out = (
				<Box height="48px" display="flex" alignItems="center" padding="16px">
					<Typography variant="subtitle2" component="h2" align="left">{category}</Typography>
				</Box>);
			zoneData[category].forEach(area => {
				const areaItem = (
					<Box height="72px" display="flex" alignItems="center" padding="16px">
						<Typography variant="subtitle2" component="h2" align="left">{area["name"]}</Typography>
					</Box>
				);
				out = [out, areaItem];
			});
			return out;
		}
	}
	const zoneList = (zoneData) => {
		let i = 0;
		let out;
		const keys = Object.keys(zoneData);
		keys.forEach(key => {
			i++;
			out = [out, zones(zoneData, key)];
			if (i < keys.length) {
				out = [out, <Divider/>];
			}
		});
		return out;
	}
	return (
		<Box m={2} mb={0}>
			<Card>
				<Box height="56px" display="flex" alignItems="center" padding="16px">
					<Typography variant="h6" component="h1" align="left">
						{data["name"]}
					</Typography>
				</Box>
				<Divider/>
				{zoneList(data["zones"])}
			</Card>
		</Box>
	);
};

export default ParkingCardFragment;