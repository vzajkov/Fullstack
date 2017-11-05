import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from './search_form.jsx';
import BusinessIndex from '../businesses/business_index.jsx';
import Map from '../map/map.jsx';

const Search = (props) => {
  return (
    <div>
      <SearchForm props={props}/>
      <div id="index-map-wrapper">
        <BusinessIndex props={props}/>
        <div id="map-wrapper">
          <Map props={props} />
        </div>
      </div>

    </div>
  );
};

export default withRouter(Search);
