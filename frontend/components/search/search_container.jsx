import { connect } from 'react-redux';
import { fetchFilteredBusinesses } from '../../actions/filter_actions';
import SearchForm from './search_form';

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilteredBusinesses: (filter) => dispatch(fetchFilteredBusinesses(filter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
