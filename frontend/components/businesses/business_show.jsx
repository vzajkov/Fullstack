import React from 'react';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.business.name}</h1>
        <br/>
        <p>{this.props.business.rating}</p>
        <br/>
        <p>{this.props.business.detailed_info.smoking}</p>
        <br/>
        <p>{this.props.business.detailed_info.takeout}</p>
        <br/>
        <p>{this.props.business.detailed_info.wifi}</p>
        <br/>
        <p>{this.props.business.detailed_info.parking}</p>
      </div>
    );
  }


}
