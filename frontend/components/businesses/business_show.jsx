import React from 'react';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    const showprops = this.props.businesses[this.props.match.params.id];
    return (
      <div>
        <h1>{showprops.name}</h1>
        <br/>
        <p>{showprops.rating}</p>
        <br/>
        <p>{showprops.detailed_info.smoking}</p>
        <br/>
        <p>{showprops.detailed_info.takeout}</p>
        <br/>
        <p>{showprops.detailed_info.wifi}</p>
        <br/>
        <p>{showprops.detailed_info.parking}</p>
      </div>
    );
  }


}

export default BusinessShow;
