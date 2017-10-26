import { connect } from 'react-redux';
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions.js';
import BusinessIndex from './business_index.jsx';

const mapStateToProps = (state) => {
  return {
    businesses: Object.keys(state.entities.businesses).map( id => {
      return state.entities.businesses[id];
    })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
