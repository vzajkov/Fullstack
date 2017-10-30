
import React from 'react';
import MarkerManager from '../../util/marker_manager.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //debugger
    const mapOptions = {
      center: { lat: 40.7831, lng: -73.9712 },
      zoom: 11
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    //debugger
    this.MarkerManager.updateMarkers(this.props.props.businesses);
    //debugger
  }

  componentWillReceiveProps(newProps) {
    debugger
    this.MarkerManager.updateMarkers(newProps.props.businesses);
  }


  componentdDidUpdate() {
    debugger
  }
  render() {
    //debugger
    return (
      <div id='map' ref={ map => this.mapNode = map }>

      </div>
    );
  }
}

export default Map;
