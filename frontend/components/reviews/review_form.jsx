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
  }

  update(field) {
  return  e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const review = this.state;
    this.props.createReview({review})

  }

  render() {
    debugger
    return(
      <form className="review-form" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.update('body')} placeholder="Write your review!"/>
        <label htmlFor="rating-radio">Rating: </label>
        <input id="rating-radio" type="radio" name="rating" value="1" onChange={this.update('rating')} />
        <input id="rating-radio" type="radio" name="rating" value="2" onChange={this.update('rating')} />
        <input id="rating-radio" type="radio" name="rating" value="3" onChange={this.update('rating')} />
        <input id="rating-radio" type="radio" name="rating" value="4" onChange={this.update('rating')} />
        <input id="rating-radio" type="radio" name="rating" value="5" onChange={this.update('rating')} />
        <input type="submit" value="Submit Review!"/>
      </form>
    );
  }
}

export default withRouter(ReviewForm)
