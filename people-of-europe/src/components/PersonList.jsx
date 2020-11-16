import React from "react";
import Person from "./Person";

const samplePersons = [
  {
    id: 3,
    firstName: "Léa",
    lastName: "Marchand",
    gender: "female",
    loc: {
      city: "Dunkerque",
      country: "France",
    },
    email: "lea.marchand@example.com",
    pic: "https://randomuser.me/api/portraits/women/0.jpg",
    nat: "French",
  },
  {
    id: 4,
    firstName: "Matteo",
    lastName: "Michel",
    gender: "male",
    loc: {
      city: "Boulogne-Billancourt",
      country: "France",
    },
    email: "matteo.michel@example.com",
    pic: "https://randomuser.me/api/portraits/men/46.jpg",
    nat: "French",
  },
  {
    id: 5,
    firstName: "Anett",
    lastName: "Schenkel",
    gender: "female",
    loc: {
      city: "Lennestadt",
      country: "Germany",
    },
    email: "anett.schenkel@example.com",
    pic: "https://randomuser.me/api/portraits/women/36.jpg",
    nat: "German",
  },
];

const PersonList = () => {
  return (
    <div className="PersonList">
      {samplePersons.map((user) => (
        <Person
          firstName={user.firstName}
          lastName={user.lastName}
          city={user.loc.city}
          country={user.loc.country}
          pic={user.pic}
        />
      ))}
    </div>
  );
};

export default PersonList;
