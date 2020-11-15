import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import PersonList from './components/PersonList';
import './App.css';

class App extends React.Component {
  state = {
    person: [],
    prenom: '',
    gender: 'default',
    nat: 'default',
  };

  componentDidMount() {
    this.getPerson();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getPerson = () => {
    axios
      .get('https://my-json-server.typicode.com/bhubr/people-api/people')
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          person: data,
        });
      });
  };

  render() {
    const { prenom, person, gender, nat } = this.state;
    let filteredData = person;
    if (prenom.length !== 0) {
      filteredData = filteredData.filter((person) =>
        person.firstName.toLowerCase().includes(prenom.toLowerCase())
      );
    }

    if (gender !== 'default') {
      filteredData = filteredData.filter(
        (person) => person.gender.toLowerCase() === gender.toLowerCase()
      );
    }

    if (nat !== 'default') {
      filteredData = filteredData.filter(
        (person) => person.nat.toLowerCase() === nat.toLowerCase()
      );
    }

    return (
      <div className="App">
        <Header title="Meetic Europe" />
        <label>Choose a filter : </label>
        <br />
        <label>Name : </label>
        <input name="prenom" value={prenom} onChange={this.handleChange} />
        <br />
        <label>Gender : </label>
        <select name="gender" onChange={this.handleChange}>
          <option value="default">-Please choose an option-</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <br />
        <label>Nationality : </label>
        <select name="nat" onChange={this.handleChange}>
          <option value="default">-Please choose an option-</option>
          <option value="british">British</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="spanish">Spanish</option>
        </select>
        <PersonList person={filteredData} />
        <Footer year="2020 " authorName="© Cédric Priouret" />
      </div>
    );
  }
}

export default App;
