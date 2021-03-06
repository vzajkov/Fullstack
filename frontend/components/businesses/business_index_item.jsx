import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BusinessIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleRating = this.handleRating.bind(this);
  }

  handleRating() {

    const rating = Math.floor(this.props.business.rating);
    if (rating === 1 ) {
      return (
        <div className="index-star-wrapper">
          <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
        </div>
      );
    } else if (rating === 2) {
      return (
      <div className="index-star-wrapper">
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
      </div>
    );
    } else if (rating === 3) {
      return (
      <div className="index-star-wrapper">
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
      </div>
    );
    } else if (rating === 4) {

      return (
      <div className="index-star-wrapper">
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
      </div>
    );
    } else if (rating === 5) {
      return (
      <div className="index-star-wrapper">
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
        <div id="index-review-star"><i id="index-review-icon" class="fa fa-star" aria-hidden="true"></i></div>
      </div>
    );
    }
  }

  render() {

    return (
      <div className="business-item-wrapper">
        <div className="img-name"><div className="list-img-wrapper"><img src={"" + this.props.business.img_url}></img></div>
          <div>
            <Link id="index-show-link" to={"/businesses/" + this.props.business.id}>
              <h3 className="business-name">{this.props.business.name}</h3>
            </Link>
            <span className="rating">{this.handleRating()}</span>
          </div>
        </div>

        <span>
          <span className="address">
          {this.props.business.address.street}, {this.props.business.address.town}
          <br/>
          {this.props.business.address.state}
          <br/>
          </span>
        </span>
      </div>
    );
  }
}

export default withRouter(BusinessIndexItem);
