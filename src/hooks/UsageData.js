import {useEffect} from 'react';
import {fetchRestaurantData} from './DataActions';

const UsageData = (props) => {
  const {error, loading, usageData} = props;
  useEffect(() => {
    props.dispatch(fetchRestaurantData());
  }, []); //eslint-disable-line
  if (error) {
    return {error};
  }
  if (loading) {
    return {loading};
  }
  return {usageData};
};

export default UsageData;