import React from "react";

class Person extends React.Component {
  render() {
    return (
      <div>
        <h3>Foo Bar</h3>
        <img
          alt="Foo Bar"
          src="<https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/200px-Missing_avatar.svg.png>"
        />
        <p>Paris, France</p>
      </div>
    );
  }
}

export default Person;
