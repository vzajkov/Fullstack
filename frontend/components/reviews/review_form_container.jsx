import { connect } from 'react-redux';
import { logout } from  '../../actions/session_actions';
import ReviewForm from './review_form.jsx';
import { createReview } from '../../actions/review_actions.js';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    businesses: state.entities.businesses,
    loggedIn: Boolean(state.entities.session.currentUser),
    review: state.entities.businesses[ownProps.location.state.id].reviews[0],
    currentUser: state.entities.session.currentUser,
    currentBusiness: state.entities.businesses[ownProps.location.state.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //debugger
  return {
    createReview: (review) => dispatch(createReview(review))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
