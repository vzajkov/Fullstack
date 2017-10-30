import React from 'react';
import MarkerManager from '../../util/marker_manager.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps() {
    debugger
    const mapOptions = {
      center: { lat: 40.7831, lng: -73.9712 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.props.businesses);
  }

  componendDidUpdate() {
    debugger
    this.MarkerManager.updateMarkers(this.props.props.businesses);
  }
  render() {
    debugger
    return (
      <div id='map' ref={ map => this.mapNode = map }>

      </div>
    );
  }
}

export default Map;
