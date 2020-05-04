import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchHeatMap} from '../hooks/HeatMapActions';

// NOT WORKING
const HeatMap = (props) => {
    // Define parameters to be sent as params to UpdateDialog component
    const {error, loading, heatmap} = props;

    useEffect(() => {
        props.dispatch(fetchHeatMap());
        let interval = setInterval(function() {props.dispatch(fetchHeatMap())}
        , 30000);

        return function cleanUpInterval() {
            console.log("hi");
            clearInterval(interval);
        }
        // Clear timeout so timer works correctly every time
    }, []); // eslint-disable-line
    if (error) {
        return (
            <div>{error.message}</div>
        );
    }
    if (loading) {
        return (
            <div>Loading heatmap...</div>
        );
    }
    else {
        return (
            <div>
                <img src={heatmap} alt="Restaurant Heatmap"
                     style={{
                         alignSelf: "center",
                         width: "100%",
                         height: "100%"
                     }}/>
            </div>
        );
    }

};
const mapStateToProps = (state) => (
    {
    heatmap: state.HeatMapReducer.map,
    loading: state.HeatMapReducer.loading,
    error: state.HeatMapReducer.error,
});
export default connect(mapStateToProps)(HeatMap);