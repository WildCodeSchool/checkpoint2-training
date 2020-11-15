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
    const { prenom, person } = this.state;
    let filteredData = person;
    if (prenom.length !== 0) {
      filteredData = filteredData.filter((person) =>
        person.firstName.toLowerCase().includes(prenom.toLowerCase())
      );
    }

    return (
      <div className="App">
        <Header title="Meetic Europe" />
        <input name="prenom" value={prenom} onChange={this.handleChange} />
        <PersonList person={filteredData} />
        <Footer year="2020 " authorName="© Cédric Priouret" />
      </div>
    );
  }
}

export default App;
