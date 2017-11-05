import { connect } from 'react-redux';
import { fetchFilteredBusinesses, updateFiltering } from '../../actions/filter_actions';
import Search from './search.jsx';
import { logout } from  '../../actions/session_actions';
import { fetchBusinesses } from '../../actions/business_actions.js';

const mapStateToProps = (state) => {
  
  return {
    filters: state.filters,
    businesses: Object.keys(state.entities.businesses).map( id => {
      return state.entities.businesses[id];
    }),
    loggedIn: Boolean(state.entities.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    fetchFilteredBusinesses: (filter) => dispatch(fetchFilteredBusinesses(filter)),
    updateFiltering: (filter,value) => dispatch(updateFiltering(filter,value)),
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
