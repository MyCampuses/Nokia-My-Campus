import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {fetchHeatMap} from '../hooks/HeatMapActions';

// NOT WORKING
const HeatMap = (props) => {
  // Define parameters to be sent as params to UpdateDialog component
  const {error, loading, heatmap} = props
      const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchHeatMap());
      // Clear timeout so timer works correctly every time
  });
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
    return (
        <div>
          <p>This is heatmap {heatmap}</p>
        </div>
    );
  };
  const mapStateToProps = (state) => ({
    heatmap: state.heatmap,
    loading: state.heatmap,
    error: state.heatmap,
  });
  export default connect(mapStateToProps)(HeatMap);