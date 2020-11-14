import React from "react";
import Person from "./Person";

class PersonList extends React.Component {
  render() {
    const selectedGender = "female";
    const selectNat = "British";
    const selectName = "Rosie";
    const filteredData = this.props.person.filter(
      (person) =>
        person.gender === selectedGender &&
        person.nat === selectNat &&
        person.firstName === selectName
    );
    console.log("test", filteredData);
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
