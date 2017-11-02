import React from 'react';
import { Link } from 'react-router-dom';
class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleLink() {
    debugger
    if (this.props.review.author_id === this.props.currentUser.id) {
      debugger
      return (
      <div>
        <Link to={{pathname: "/reviews/" + this.props.review.id + "/edit", state: {currentBusiness: this.props.currentBusiness, review: this.props.review} }}>Edit your Review!</Link>
        <button onClick={this.handleClick}> Delete Review </button>
      </div>
    );
    }
  }

  handleClick() {
    debugger
    this.props.deleteReview(this.props.review);
    this.props.history.push(`/businesses/`);
  }

  render() {
    debugger
    return (
      <div>
        {this.toggleLink()}
        <p>Author: {this.props.review.author_id}</p>
        <p>{this.props.review.body}</p>
        <p>Rating: {this.props.review.rating}</p>
        <br/>
      </div>
    );
  }
}

export default ReviewIndexItem;
