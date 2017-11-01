import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BusinessIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return (
      <div className="business-item-wrapper">
        <div className="img-name"><div className="list-img-wrapper"><img src={"" + this.props.business.img_url}></img></div>
          <div>
            <Link id="index-show-link" to={"/businesses/" + this.props.business.id}>
              <h3 className="business-name">{this.props.business.name}</h3>
            </Link>
            <span className="rating">Rating: {this.props.business.rating}</span>
          </div>
        </div>

        <span>
          <span className="address">
          {this.props.business.address.street}, {this.props.business.address.town}
          <br/>
          {this.props.business.address.state}, {this.props.business.address.country}
          <br/>
          </span>
        </span>
      </div>
    );
  }
}

export default withRouter(BusinessIndexItem);
