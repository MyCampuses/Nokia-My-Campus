import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchHeatMap} from '../hooks/HeatMapActions';

// NOT WORKING
const HeatMap = (props) => {
  // set props for each of the heatmap parts
  const {error, loading, heatmap} = props;
  // Add timer for periodic heatmap update, 30 second interval
  useEffect(() => {
    props.dispatch(fetchHeatMap());
  }, []); //eslint-disable-line
  if (error) {
    return (
        <div>{error.message}</div>
    );
  }
  if (loading) {
    return (
        <div>Loading heatmap...</div>
    );
  } else {
    return (
        <div>
          <img src={heatmap} alt="Restaurant Heatmap"
               style={{
                 alignSelf: 'center',
                 width: '100%',
                 height: '100%',
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