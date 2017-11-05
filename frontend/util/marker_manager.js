
class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    console.log("time to update");
    const businessObj = {};
    businesses.forEach((business) => (businessObj[business.id] = business));
    businesses.forEach((business) => {
      if (!this.markers.hasOwnProperty(business.id)) {
        this.markers[business.id] = this.createMarkerFromBusiness(business);
        }
      }
    );
    //
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
    var myMap = this.map;
    const position = new google.maps.LatLng(business.address.lat, business.address.lng)
    var marker = new google.maps.Marker({
    position: {lat: business.address.lat, lng: business.address.lng},
    map: this.map,
    id: business.id
    });
    var contentString = "<div>" +
    `<img id="info-window-img" src=${business.img_url}>` + "</img>" +
    "<div>" + business.name + "</div>" +
    "<div>" + business.address.street + "</div>" +
    "<div>" + business.address.town + ", " + business.address.state + "</div>" +
    "</div>";
    var infoWindow = new google.maps.InfoWindow({
    content: contentString
    });
    marker.addListener('click', function() {
    infoWindow.open(myMap, marker);
    });
    return marker;
    // this.markers[marker.id] = marker;
  }
}

export default MarkerManager;
