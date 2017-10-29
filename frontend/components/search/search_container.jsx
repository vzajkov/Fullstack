import { connect } from 'react-redux';
import { fetchFilteredBusinesses, updateFiltering } from '../../actions/filter_actions';
import SearchForm from './search_form';
import { logout } from  '../../actions/session_actions';

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
)(SearchForm);
