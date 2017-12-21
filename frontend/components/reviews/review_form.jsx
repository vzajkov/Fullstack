import React from 'react';
import { withRouter } from 'react-router-dom';
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "1",
      body: "fake review",
      business_id: this.props.currentBusiness.id,
      author_id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      oneStar: false,
      twoStar: false,
      threeStar: false,
      fourStar: false,
      fiveStar: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleOne = this.toggleOne.bind(this);
    this.toggleTwo = this.toggleTwo.bind(this);
    this.toggleThree = this.toggleThree.bind(this);
    this.toggleFour = this.toggleFour.bind(this);
    this.toggleFive = this.toggleFive.bind(this);
  }

  update(field) {
  return  e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  toggleOne () {
    this.setState(
      { oneStar: true,
        twoStar: false,
        threeStar: false,
        fourStar: false,
        fiveStar: false
      }
    );
  }
  toggleTwo () {
    this.setState(
      { oneStar: true,
        twoStar: true,
        threeStar: false,
        fourStar: false,
        fiveStar: false
      }
    );
  }
  toggleThree () {
    this.setState(
      { oneStar: true,
        twoStar: true,
        threeStar: true,
        fourStar: false,
        fiveStar: false
      }
    );
  }
  toggleFour () {
    this.setState(
      { oneStar: true,
        twoStar: true,
        threeStar: true,
        fourStar: true,
        fiveStar: false
      }
    );
  }
  toggleFive () {
    this.setState(
      { oneStar: true,
        twoStar: true,
        threeStar: true,
        fourStar: true,
        fiveStar: true
      }
    );
  }

  handleEdit(e) {

    e.preventDefault();
    this.props.editReview({review: {
        rating: this.state.rating,
        body: this.state.body,
        business_id: this.props.currentBusiness.id,
        author_id: this.props.currentUser.id,
        username: this.props.currentUser.username,
        id: this.props.review_id
      }
    });
    this.props.history.push(`/businesses/`);
  }

  handleSubmit(e) {

    e.preventDefault();
    this.props.createReview({review: {
        rating: this.state.rating,
        body: this.state.body,
        business_id: this.props.currentBusiness.id,
        author_id: this.props.currentUser.id,
        username: this.props.currentUser.username
      }
    });
    this.props.history.push(`/businesses/`);
  }

  render() {

    return(
      <form className="review-form" onSubmit={this.props.currentUser.id === this.props.review.author_id ? this.handleEdit : this.handleSubmit}>

        <div id="review-rating-radio">

          <label className="label-one" htmlFor="rating-radio-1">
            <div onClick={this.toggleOne} className={this.state.oneStar ? 'rated' : 'rating-star-box'}><i className="fa fa-star" aria-hidden="true"></i></div>
          </label>

          <label className="label-two"  htmlFor="rating-radio-2">
            <div onClick={this.toggleTwo} className={this.state.twoStar ? 'rated' : 'rating-star-box'}><i className="fa fa-star" aria-hidden="true"></i></div>
          </label>

          <label  className="label-three" htmlFor="rating-radio-3">
            <div onClick={this.toggleThree} className={this.state.threeStar ? 'rated' : 'rating-star-box'}><i className="fa fa-star" aria-hidden="true"></i></div>
          </label>

          <label className="label-four" htmlFor="rating-radio-4">
            <div onClick={this.toggleFour} className={this.state.fourStar ? 'rated' : 'rating-star-box'}><i className="fa fa-star" aria-hidden="true"></i></div>
          </label>

          <label className="label-five" htmlFor="rating-radio-5">
            <div onClick={this.toggleFive} className={this.state.fiveStar ? 'rated' : 'rating-star-box'}><i className="fa fa-star" aria-hidden="true"></i></div>
          </label>

          <input id="rating-radio-1" type="radio" name="rating" value="1" onChange={this.update('rating')} />
          <input id="rating-radio-2" type="radio" name="rating" value="2" onChange={this.update('rating')} />
          <input id="rating-radio-3" type="radio" name="rating" value="3" onChange={this.update('rating')} />
          <input id="rating-radio-4" type="radio" name="rating" value="4" onChange={this.update('rating')} />
          <input id="rating-radio-5" type="radio" name="rating" value="5" onChange={this.update('rating')} />

        </div>
          <textarea id="review-body-input" onChange={this.update('body')} placeholder="Write your review!"/>
        <input id="submit-review" type="submit" value="Submit Review!"/>
      </form>
    );
  }
}

export default withRouter(ReviewForm);
