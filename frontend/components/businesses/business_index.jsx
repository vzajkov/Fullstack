import React from 'react';
import BusinessIndexItem from './business_index_item.jsx';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.props.fetchBusinesses();
  }

  render() {
    //
  return (

    <div>

      <ul className="business-index-list">
      {this.props.props.businesses.map(business => (
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
