import React, {useEffect} from 'react';
import {fetchRestaurantData} from './DataActions';

const UsageData = (props) => {
  useEffect(() => {
    props.dispatch(fetchRestaurantData());
  }, []); //eslint-disable-line
  const {error, loading, usageData} = props;
  if (error) {
    return <div>{error.message}</div>
  }
  if (loading) {
    return <div>loading</div>;
  }
  return <div>{usageData}</div>;
};

export default UsageData;