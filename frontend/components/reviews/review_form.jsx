import React from 'react';
import { withRouter } from 'react-router-dom';
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "1",
      body: "fake review",
      business_id: this.props.currentBusiness.id,
      author_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  update(field) {
  return  e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleEdit(e) {
    debugger
    e.preventDefault();
    // const review = this.setState({
    //   id: this.props.review_id
    // }, this.props.editReview({review: this.state}));
    this.props.editReview({review: {
        rating: this.state.rating,
        body: this.state.body,
        business_id: this.props.currentBusiness.id,
        author_id: this.props.currentUser.id,
        id: this.props.review_id
      }
    });
    this.props.history.push(`/businesses/`);
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const review = this.state;
    this.props.createReview({review});
    this.props.history.push(`/businesses/`);
  }

  render() {
    debugger
    return(
      <form className="review-form" onSubmit={this.props.currentUser.id === this.props.review.author_id ? this.handleEdit : this.handleSubmit}>
        <input id="review-body-input" type="text" onChange={this.update('body')} placeholder="Write your review!"/>
        <div id="review-rating-radio">
          <p id="rating-indicator">Rating: </p>
          <label>1
          <input id="rating-radio" type="radio" name="rating" value="1" onChange={this.update('rating')} />
          </label>

          <label>2
          <input id="rating-radio" type="radio" name="rating" value="2" onChange={this.update('rating')} />
          </label>

          <label>3
          <input id="rating-radio" type="radio" name="rating" value="3" onChange={this.update('rating')} />
          </label>

          <label>4
          <input id="rating-radio" type="radio" name="rating" value="4" onChange={this.update('rating')} />
          </label>

          <label>5
          <input id="rating-radio" type="radio" name="rating" value="5" onChange={this.update('rating')} />
          </label>
        </div>
        <input id="submit-review" type="submit" value="Submit Review!"/>
      </form>
    );
  }
}

export default withRouter(ReviewForm)
