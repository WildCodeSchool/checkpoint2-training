import React from "react";

class Person extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.firstName} {this.props.lastName}
        </p>
        <img src={this.props.pic} alt={this.props.firstName} />
        <p>{this.props.city}</p>
        <p>{this.props.country}</p>
        <br />
      </div>
    );
  }
}

export default Person;
