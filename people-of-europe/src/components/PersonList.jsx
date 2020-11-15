import React from 'react';
import Person from './Person';
import './PersonList.css';

class PersonList extends React.Component {
  render() {
    const { person } = this.props;
    return (
      <div>
        <div className="PersonList">
          {person.map((person) => (
            <Person key={person.id} person={person} />
          ))}
        </div>
      </div>
    );
  }
}

export default PersonList;
