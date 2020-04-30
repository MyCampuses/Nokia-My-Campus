import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchHeatMap } from '../hooks/HeatMapActions';

const HeatMap = (props) => {
  const { error, loading, heatmap } = props
  useEffect(() => {
    props.dispatch(fetchHeatMap())
  },[props])
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
const mapStateToProps = (state) => ({
  heatmap: state.heatmap,
  loading: state.loading,
  error: state.error
})
export default connect(mapStateToProps)(HeatMap);