import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return (
      <div>
        <p>{this.props.props.body}</p>
        <p>{this.props.props.rating}</p>
      </div>
    );
  }
}

export default ReviewIndexItem;
