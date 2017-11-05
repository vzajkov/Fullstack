import { connect } from 'react-redux';
import { logout } from  '../../actions/session_actions';
import ReviewForm from './review_form.jsx';
import { createReview } from '../../actions/review_actions.js';

const mapStateToProps = (state, ownProps) => {
  
  return {
    businesses: state.entities.businesses,
    loggedIn: Boolean(state.entities.session.currentUser),
    review_id: null,
    review: {author_id: null},
    currentUser: state.entities.session.currentUser,
    currentBusiness: state.entities.businesses[ownProps.location.state.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //
  return {
    createReview: (review) => dispatch(createReview(review)),
    editReview: (review) => dispatch(editReview(review))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
