import React from 'react';
import './Person.css';

class Person extends React.Component {
  render() {
    const { person } = this.props;

    return (
      <div className="Person">
        <h3>
          {person.firstName} {person.lastName}
        </h3>
        <img src={person.pic} alt={person.firstName} />
        <p>{person.loc.city}</p>
        <p>{person.loc.country}</p>
        <p>{person.email}</p>
        <p>{person.nat}</p>
        <br />
      </div>
    );
  }
}

export default Person;
