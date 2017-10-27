import { connect } from 'react-redux';
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions.js';
import BusinessIndex from './business_index.jsx';
import { logout } from  '../../actions/session_actions';
const mapStateToProps = (state) => {
  return {
    businesses: Object.keys(state.entities.businesses).map( id => {
      return state.entities.businesses[id];
    }),
    loggedIn: Boolean(state.entities.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
