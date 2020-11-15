import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.year}
          {this.props.authorName}
        </p>
      </div>
    );
  }
}

export default Footer;
