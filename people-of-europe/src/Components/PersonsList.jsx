import React from "react";
import Person from "./Person";

const PersonsList = () => {
  const personAttributes = [
    {
      firstName: "Foo",
      lastName: "Bar",
      pic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/200px-Missing_avatar.svg.png",
      city: "Paris",
      country: "France",
    },
    {
      firstName: "Mister",
      lastName: "Cat",
      pic: "https://randomuser.me/api/portraits/men/0.jpg",
      city: "Malibu",
      country: "United States",
    },
  ];
  return (
    <div>
      {personAttributes.map((singlePerson) => (
        <Person
          firstName={singlePerson.firstName}
          lastName={singlePerson.lastName}
          pic={singlePerson.pic}
          city={singlePerson.city}
          country={singlePerson.country}
        />
      ))}
    </div>
  );
};

export default PersonsList;
