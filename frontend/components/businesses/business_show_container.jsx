import { connect } from 'react-redux';
import { logout } from  '../../actions/session_actions';
import BusinessShow from './business_show.jsx';
const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    businesses: state.entities.businesses,
    loggedIn: Boolean(state.entities.session.currentUser)

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  debugger
  return {
    fetchBusiness: (id) => dispatch(ownProps.match.params.id),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
