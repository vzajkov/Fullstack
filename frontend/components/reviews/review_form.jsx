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

    e.preventDefault();
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

    e.preventDefault();
    const review = this.state;
    this.props.createReview({review});
    this.props.history.push(`/businesses/`);
  }

  render() {

    return(
      <form className="review-form" onSubmit={this.props.currentUser.id === this.props.review.author_id ? this.handleEdit : this.handleSubmit}>
        <textarea id="review-body-input" onChange={this.update('body')} placeholder="Write your review!"/>
        <div id="review-rating-radio">
          <p id="rating-indicator">Rating: </p>

          <input id="rating-radio-1" type="radio" name="rating" value="1" onChange={this.update('rating')} />

          <label htmlFor="rating-radio-1">
            <div className={["rating-star-box","one","two", "three", "four", "five"].join(" ")}><i className="fa fa-star" aria-hidden="true"></i></div>
          </label>

          <input id="rating-radio-2" type="radio" name="rating" value="2" onChange={this.update('rating')} />

          <label  htmlFor="rating-radio-2">
            <div className={["rating-star-box","two", "three", "four", "five"].join(" ")}><i className="fa fa-star" aria-hidden="true"></i></div>
          </label>

          <input id="rating-radio-3" type="radio" name="rating" value="3" onChange={this.update('rating')} />
          <label  htmlFor="rating-radio-3">
            <div className={["rating-star-box","three", "four", "five"].join(" ")}><i className="fa fa-star" aria-hidden="true"></i></div>
          </label>

          <input id="rating-radio-4" type="radio" name="rating" value="4" onChange={this.update('rating')} />

          <label  htmlFor="rating-radio-4">
            <div className={["rating-star-box","four", "five"].join(" ")}><i className="fa fa-star" aria-hidden="true"></i></div>
          </label>

          <input id="rating-radio-5" type="radio" name="rating" value="5" onChange={this.update('rating')} />

          <label  htmlFor="rating-radio-5">
            <div className={["rating-star-box","five"].join(" ")}><i className="fa fa-star" aria-hidden="true"></i></div>
          </label>

        </div>
        <input id="submit-review" type="submit" value="Submit Review!"/>
      </form>
    );
  }
}

export default withRouter(ReviewForm);
