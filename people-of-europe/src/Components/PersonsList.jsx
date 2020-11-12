import React from "react";
import Person from "./Person";

const PersonsList = (props) => {
  const { onePerson } = props;
  return (
    <article>
      {onePerson.map((singlePerson) => (
        <Person
          firstName={singlePerson.firstName}
          lastName={singlePerson.lastName}
          pic={singlePerson.pic}
          city={singlePerson.loc.city}
          country={singlePerson.loc.country}
        />
      ))}
    </article>
  );
};

export default PersonsList;
