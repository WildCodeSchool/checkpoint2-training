import React from "react";
import Person from "./Person";

const PersonsList = () => {
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
  return (
    <div>
      {samplePersons.map((singlePerson) => (
        <Person
          firstName={singlePerson.firstName}
          lastName={singlePerson.lastName}
          pic={singlePerson.pic}
          city={singlePerson.loc.city}
          country={singlePerson.loc.country}
        />
      ))}
    </div>
  );
};

export default PersonsList;
