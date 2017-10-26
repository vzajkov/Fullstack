import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="business-item-wrapper">
        <h3>{this.props.business.name}</h3>
        <span className="rating">Rating: {this.props.business.rating}</span>
        <span className="address">
          {this.props.business.address.street}, {this.props.business.address.town}
          {this.props.business.address.state}, {this.props.business.address.country}
        </span>
      </div>
    );
  }
}

export default withRouter(BusinessIndexItem);
