import React from "react";

const Person = (props) => {
  return (
    <div>
      <h3>
        {props.firstName} {props.lastName}
      </h3>
      <img src={props.pic} alt={props.firstName + " " + props.lastName} />
      <p>
        {props.city}, {props.country}
      </p>
    </div>
  );
};

export default Person;
