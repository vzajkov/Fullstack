/* global google:false */

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.labelIndex = 0;
  }

  updateMarkers(businesses) {
    console.log("time to update");
    const businessObj = {};
    businesses.forEach((business) => (businessObj[business.id] = business));
    debugger
    businesses.forEach((business) => {
      if (!this.markers.hasOwnProperty(business.id)) {
        this.markers[business.id] = this.createMarkerFromBusiness(business);
        }
      }
    );
    debugger
    Object.keys(this.markers).map((id) => {
      if (!businessObj.hasOwnProperty(id)) {
        this.removeMarkerfromMap(this.markers[id]);
        delete this.markers[id];
      }
    });

  }

  removeMarkerfromMap(marker) {
    marker.setMap(null);
  }

  createMarkerFromBusiness(business) {
    debugger
    const position = new google.maps.LatLng(business.address.lat, business.address.lng)
    var marker = new google.maps.Marker({
    position: position,
    label: this.labelIndex++,
    map: this.map,
    id: business.id
    });
  }
}

export default MarkerManager;
