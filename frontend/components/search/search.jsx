import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from './search_form.jsx';
import BusinessIndex from '../businesses/business_index.jsx';
import Map from '../map/map.jsx';

const Search = (props) => {
  debugger
  return (
    <div>
      <BusinessIndex props={props}/>
      <Map />
      <SearchForm props={props}/>

    </div>
  );
};

export default withRouter(Search);
