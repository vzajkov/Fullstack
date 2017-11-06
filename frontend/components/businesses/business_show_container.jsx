import { connect } from 'react-redux';
import { logout } from  '../../actions/session_actions';
import BusinessShow from './business_show.jsx';
import { deleteReview } from '../../actions/review_actions.js';
const mapStateToProps = (state, ownProps) => {

  return {
    businesses: state.entities.businesses,
    loggedIn: Boolean(state.sessions.currentUser),
    reviews: Object.keys(state.entities.businesses[ownProps.match.params.id].reviews),
    currentUser: state.sessions.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //
  return {
    logout: () => dispatch(logout()),
    deleteReview: (review) => dispatch(deleteReview(review))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
