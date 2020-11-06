
import React, {Fragment, useState, Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

class TextDataTable extends Component {
	render() {
		const createRow = (rowData) => {
			return (
				<Grid container justify="space-between">
					<Typography inline variant="body2" align="left">{rowData[0]}</Typography>
					<Typography inline variant="body2" align="right">{rowData[1]}</Typography>
				</Grid>
			);
		}
		
		let out = [];
		this.props.data.forEach(row => {
			out.push(createRow(row));
		});
		return out;
	}
}

export default TextDataTable;