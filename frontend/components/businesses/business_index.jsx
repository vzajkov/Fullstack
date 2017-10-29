import React from 'react';
import BusinessIndexItem from './business_index_item.jsx';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
  return (

    <div>
      <nav className="navbar">
        <button id="log-out-button" onClick={this.props.logout} >Log Out</button>
        <form id="search-bar">
          <input type="text" placeholder="Search for businesses"/>

        </form>
      </nav>

      <ul className="business-index-list">
      {this.props.businesses.map(business => (
        <li className="business-index-listitem" key={business.id}>
        <BusinessIndexItem business={business}
          key={business.id} />
        </li>
          )
        )
      }
      </ul>
    </div>
  );
  }
}

export default BusinessIndex;
