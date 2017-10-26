import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="business-item-wrapper">
        <span>
          <h3 className="business-name">{this.props.business.name}</h3>
          <span className="rating">Rating: {this.props.business.rating}</span>
        </span>
        <span >
          <span className="address">
          {this.props.business.address.street}, {this.props.business.address.town}
          <br/>
          {this.props.business.address.state}, {this.props.business.address.country}
          </span>
        </span>
      </div>
    );
  }
}

export default withRouter(BusinessIndexItem);
