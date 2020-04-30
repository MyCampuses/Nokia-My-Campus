import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchHeatMap } from './HeatMapActions';

const HeatMap = (props) => {
  const { error, loading, heatmap } = props
  useEffect(() => {
    props.dispatch(fetchHeatMap())
  },[])
  if (error) {
    return (
        <div>{error.message}</div>
    )
  }
  if (loading) {
    return (
        <div>Loading heatmap...</div>
    )
  }
  return (
      <div>
        <p>This is heatmap {heatmap}</p>
      </div>
  )
}
const stateToProps = state => ({
  heatmap: state.heatmap.map,
  loading: state.heatmap.loading,
  error: state.heatmap.error
})
export default connect(stateToProps)(HeatMap)