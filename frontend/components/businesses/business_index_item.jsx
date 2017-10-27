import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="business-item-wrapper">
        <span class="list-img-wrapper"></span>
          <div>
            <h3 className="business-name">{this.props.business.name}</h3>
            <span className="rating">Rating: {this.props.business.rating}</span>
          </div>

        <span>
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
