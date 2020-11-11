import React from "react";

function Person({ firstName, lastName, pic, city, country }) {
  return (
    <div className="person">
      <h3>
        {firstName} {lastName}
      </h3>
      <img src={pic} alt={firstName + lastName}></img>
      <p>
        {city}, {country}
      </p>
    </div>
  );
}

export default Person;
