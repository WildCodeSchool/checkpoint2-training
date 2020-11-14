import React from "react";
import Person from "./Person";

class PersonList extends React.Component {
  render() {
    return (
      <div>
        {this.props.person.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    );
  }
}

export default PersonList;
