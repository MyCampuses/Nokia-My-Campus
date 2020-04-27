import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {fetchRestaurantData} from './DataActions';

const UsageData = (props) => {
  useEffect(() => {
    props.dispatch(fetchRestaurantData());
  }, []); //eslint-disable-line
  const {error, loading, data} = props;
  if (error) {
    return <div>{error.message}</div>
  }
  if (loading) {
    return <div>loading</div>;
  }
  return <div>{data.usageData}</div>;
};
const stateToProps = state => ({
  data: state.data.usageData,
  loading: state.data.loading,
  error: state.data.error
})

export default connect(stateToProps(UsageData));