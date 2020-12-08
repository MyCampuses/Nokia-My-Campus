
import React from 'react';
import GlobalFunctions from "../hooks/GlobalFunctions";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import strings from '../localization';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {PieChart, Pie} from 'recharts';

const ParkingCardFragment = () => {
    const {onItemClickNavigate} = GlobalFunctions();
	
	const nameToLocalizedString = (name) => {
		switch (name) {
			case "inside":
				return strings.inside;
			case "roof":
				return strings.rooftop;
			
			default:
				return name;
		}
		
	};
	
	const categoryToLocalizedString = (name) => {
		switch (name) {
			case "parking":
				return strings.parkingCategoryParking;
			case "ev_charging":
				return strings.parkingCategoryEV;

			default:
				return name;
		}
	};
	
	const areaPie = (count, capacity) => {
		const colors = ["#4caf50", "#ffde18", "#df2929"];
		let color;
		const usage = count/capacity;
		const remaining = 1-usage;
		if (usage > 0.95) {
			color = colors[2];
		}
		else if (usage > 0.75) {
			color = colors[1];
		}
		else {
			color = colors[0];
		}
		return (
			<Pie dataKey="value" data={[{fill: color, value: usage}, {fill: "#eeeeee", value: remaining}]} startAngle={90} endAngle={-270} innerRadius={10} outerRadius={20} fill="#8884d8"  isAnimationActive={false}/>
		);
	}
	
	const createAreaItem = (area) => {
		if (area.usageData == null) {
			area.loading = true;
		} else {
			area.loading = false;
		}
		let utilizationString;
		if (area.loading) {
			utilizationString = strings.loading;
		} else {
			if (area.estimate) {
				utilizationString = strings.parkingUtilizationEstimate.replace("{0}", (area.usageData.capacity-area.usageData.count)).replace("{1}", area.usageData.capacity);
			} else {
				utilizationString = strings.parkingUtilization.replace("{0}", (area.usageData.capacity-area.usageData.count)).replace("{1}", area.usageData.capacity);
			}
		}
		let link;
		if (area["linkId"] !== undefined) {
			link = area["linkId"];
		} else {
			link = area["id"];
		}
		return (
			<ListItem button onClick={()=>onItemClickNavigate(link)}>
				<ListItemAvatar>
					<PieChart width={40} height={40}>
						{(area.loading ? areaPie(0, 1) : areaPie(area.usageData.count, area.usageData.capacity))}
					</PieChart>
				</ListItemAvatar>
				<ListItemText primary={nameToLocalizedString(area["name"])} secondary={utilizationString} />
			</ListItem>
		);
	};
	
	const zones = (zoneData, category) => {
		if (category in zoneData) {
			let out = (
				<Box height="48px" display="flex" alignItems="center" padding="16px">
					<Typography variant="subtitle2" component="h2" align="left">{categoryToLocalizedString(category)}</Typography>
				</Box>);
			zoneData[category].forEach(area => {
				out = [out, createAreaItem(area)];
			});
			return out;
		}
	};
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
	};
	const fullCard = (data) => {
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

	return {
		fullCard,
		createAreaItem
	}
};

export default ParkingCardFragment;