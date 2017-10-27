import { logout } from  '../../actions/session_actions';
import BusinessShow from './business_show.jsx';
const mapStateToProps = (state, ownProps) => {
  return {
    business: state.entities.businesses[ownProps.match.params.id],
    loggedIn: Boolean(state.entities.session.currentUser)

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBusiness: (id) => dispatch(ownProps.match.params.id),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(BusinessShow);
