import React from 'react';
import { Link } from 'react-router-dom';
class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  toggleLink() {

    if (this.props.review.author_id === this.props.currentUser.id) {

      return (
      <div>
        <Link id="edit-review-link" to={{pathname: "/reviews/" + this.props.review.id + "/edit", state: {currentBusiness: this.props.currentBusiness, review: this.props.review} }}>Edit your Review!</Link>
        <button id="delete-review-button" onClick={this.handleClick}> Delete Review </button>
      </div>
    );
    }
  }

  handleClick() {
    this.props.deleteReview(this.props.review);
    this.props.history.push(`/businesses/`);
  }

  handleRating() {

    const rating = Math.floor(this.props.review.rating);
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
    const styling = {
        fontStyle: "italic"
    };

    return (
      <div id="review-item-wrapper">
        {this.toggleLink()}
        <div id="review-info-wrapper">
          <p>{this.handleRating()}</p>
          <p>{this.props.review.username} says: </p>
          <p style={styling}>{this.props.review.body}</p>
        </div>
        <br/>
      </div>
    );
  }
}

export default ReviewIndexItem;
