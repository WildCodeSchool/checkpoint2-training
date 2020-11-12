import React from 'react';
import './Person.css';

function Person(props) {
  return (
    <div className="Person">
      <h3>{props.firstName} {props.lastName}</h3>
      <img src={props.pic} alt="Foo Bar" />
      <p>{props.city}, {props.country}</p>
    </div>
  );
}

export default Person;
