
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const TextDataTable = (data) => {
	const createRow = (rowData) => {
		return (
			<Grid container justify="space-between">
				<Typography inline variant="body2" align="left">{rowData[0]}</Typography>
				<Typography inline variant="body2" align="right">{rowData[1]}</Typography>
			</Grid>
		);
	}
	
	let out = [];
	console.log(data.data);
	data.data.forEach(row => {
		out.push(createRow(row));
	});
	return out;
}

export default TextDataTable;