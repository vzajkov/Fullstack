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
      <span>
        <button id="log-out-button" onClick={this.props.logout} >Log Out</button>
      </span>

      <ul className="business-index-list">
      {this.props.businesses.map(business => (
        <li className="business-index-listitem">
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
