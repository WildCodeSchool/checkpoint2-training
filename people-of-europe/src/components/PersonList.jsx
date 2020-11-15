import React from 'react';
import Person from './Person';
import './PersonList.css';

class PersonList extends React.Component {
  // componentDidMount() {
  //   console.log('Mount PersonList');
  //   this.setState({
  //     list: this.props.person,
  //   });
  // }

  render() {
    // let filteredData = list;
    // console.log(prenom.length);
    // if (prenom.length !== 0) {
    //   filteredData = list.filter((person) => person.firstName === prenom);
    // }
    //filteredData = list.filter((person) => person.firstName === prenom);
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
