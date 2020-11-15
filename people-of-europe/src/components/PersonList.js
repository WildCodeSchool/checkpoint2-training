import React from "react";
import Person from "./Person";
import "./PersonList.css";

function PersonList(props) {
  return (
    <div className="PersonList">
      {props.Persons.map((singlePerson) => (
        <Person
          key={singlePerson.id}
          firstName={singlePerson.firstName}
          lastName={singlePerson.lastName}
          pic={singlePerson.pic}
          city={singlePerson.loc.city}
          country={singlePerson.loc.country}
        />
      ))}
    </div>
  );
}
export default PersonList;
