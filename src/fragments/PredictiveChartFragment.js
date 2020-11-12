
import React from 'react';
import {AreaChart, XAxis, YAxis, CartesianGrid, Area, ResponsiveContainer} from 'recharts';


const PredictiveChartFragment = (data, expectedData, maximum) => {

    const dataToChart = (raw, maximum) => {
        if (raw !== undefined) {
            const out = [];
            for (let key in raw) {
                out.push({x: raw[key].date, y: (maximum == null ? raw[key].count/maximum*100 : raw[key].count/maximum*100)});
            }
            return out;
        }
    };
	
	const formatData = (rawData) => {
		console.log(rawData);
		if (rawData == null) {
			return [];
		}
		
		console.log(maximum);
		return dataToChart(rawData.samples, maximum);
	}
	
	const createPrediction = (formattedData, formattedExpectedData) => {
		let newData = []
		let maxLength = Math.max(formattedData.length, formattedExpectedData.length);
		let predictionScalePoint = formattedData.length-1;
		let predictionScaleFactor = 1;
		console.log(formattedData);
		if (data != null) {
			//Calculate prediction scale factor and scale the prediction
			if (formattedData.length < formattedExpectedData.length 
			&& formattedData[predictionScalePoint].y > 5 
			&& formattedExpectedData[predictionScalePoint].y > 5) {
				console.log("Prediction");
				console.log(""+formattedData[predictionScalePoint].y+" "+formattedExpectedData[predictionScalePoint].y);
				predictionScaleFactor = formattedData[predictionScalePoint].y / formattedExpectedData[predictionScalePoint].y;
				console.log(predictionScaleFactor);
				formattedExpectedData.forEach((item, index, array) => {
					item.y = item.y*predictionScaleFactor;
					array[index] = item;
				});
			}
		}
		
		for (let i = 0; i < maxLength; i++) {
			let point = {};
			if (i < formattedData.length) {
				point.x = formattedData[i].x;
				point.y = formattedData[i].y;
				maxY = Math.max(formattedData[i].y, maxY);
				if (i == formattedData.length-1 && i < formattedExpectedData.length) {
					point.py = formattedData[i].y;
				}
			}
			else if (i < formattedExpectedData.length) {
				point.py = formattedExpectedData[i].y;
				point.x = formattedExpectedData[i].x;
				maxY = Math.max(formattedExpectedData[i].y, maxY);
			}
			newData.push(point);
		}
		maxY = Math.floor(Math.min(maxY*1.25, 100));
		return newData;
	}
	
	
	let maxY = 0;
	let formattedData = formatData(data);
	let formattedExpectedData = formatData(expectedData);
	
	let dataWithPrediction = createPrediction(formattedData, formattedExpectedData);
	console.log(dataWithPrediction);
	let tickdomain;
	let ticks = ["6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00"];
	
	console.log(ticks);
	
    
	
	console.log(maxY);
	return (
		<ResponsiveContainer width="100%" height={300}>
			<AreaChart data={dataWithPrediction} margin={{left: -20, top: 20}}>
				<CartesianGrid strokeDasharray="3 3" />
				<Area dataKey="py" stroke="#000" strokeOpacity={0.25} strokeWidth={2} fillOpacity={0}/>
				<Area dataKey="y" stroke="#124191" fill="#124191" strokeOpacity={1} strokeWidth={2} fillOpacity={0.5}/>
				<XAxis dataKey="x" ticks={ticks} domain={tickdomain}/>
				<YAxis fill="#8884d8" type="number" domain={[0, maxY]} unit={"%"} allowDataOverflow={true}/>
			</AreaChart>
		</ResponsiveContainer>
	);
}

export default PredictiveChartFragment;