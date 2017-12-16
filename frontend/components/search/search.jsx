import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from './search_form.jsx';
import BusinessIndex from '../businesses/business_index.jsx';
import Map from '../map/map.jsx';

const Search = (props) => {
  return (
    <div>
      <SearchForm
        updateFiltering={props.updateFiltering}
        logout={props.logout}/>
      <div id="index-map-wrapper">
        <BusinessIndex
          fetchBusinesses={props.fetchBusinesses}
          businesses={props.businesses}/>
        <div id="map-wrapper">
          <Map businesses={props.businesses}/>
        </div>
      </div>

    </div>
  );
};

export default withRouter(Search);
