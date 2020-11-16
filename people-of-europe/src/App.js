import { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import PersonList from './components/PersonList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      genderFilter: '',
      natFilter: '',
      nameFilter: '',
    };
  }

  fetchPersons = () => {
    // axios.get => lance la requête
    axios
      .get('https://my-json-server.typicode.com/bhubr/people-api/people')
      // .then (then = alors/ensuite) => spécifier ce que je dois faire quand
      // je reçois la réponse du serveur
      .then((response) => {
        return response.data;
      })
      .then((persons) => {
        this.setState({
          persons: persons,
        });
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.fetchPersons();
  }

  getFilteredPersons = () => {
    const { persons, genderFilter, natFilter, nameFilter } = this.state;
    let filteredPersons = persons;

    if (genderFilter !== '') {
      filteredPersons = filteredPersons.filter(
        (person) => person.gender === genderFilter
      );
    }

    if (natFilter !== '') {
      filteredPersons = filteredPersons.filter(
        (person) => person.nat === natFilter
      );
    }

    if (nameFilter !== '') {
      const lowerNameFilter = nameFilter.toLowerCase();
      filteredPersons = filteredPersons.filter(
        (person) =>
          person.firstName.toLowerCase().includes(lowerNameFilter) ||
          person.lastName.toLowerCase().includes(lowerNameFilter)
      );
    }

    return filteredPersons;
  };

  render() {
    const { genderFilter, natFilter, nameFilter } = this.state;
    const filteredPersons = this.getFilteredPersons();
    return (
      <div className="App">
        <Header title="People of Europe" />
        <div>
          <label htmlFor="genderSelect">
            Gender{' '}
            <select
              id="genderSelect"
              name="genderFilter"
              value={genderFilter}
              onChange={this.handleChange}
            >
              <option value="">&mdash;</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>
          <label htmlFor="natSelect">
            Nationality{' '}
            <select
              id="natSelect"
              name="natFilter"
              value={natFilter}
              onChange={this.handleChange}
            >
              <option value="">&mdash;</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="British">British</option>
              <option value="German">German</option>
            </select>
          </label>
          <label htmlFor="nameInput">
            Name{' '}
            <input
              id="nameInput"
              name="nameFilter"
              type="text"
              value={nameFilter}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <PersonList persons={filteredPersons} />
        <Footer year="2020" authorName="Benoît Hubert" />
      </div>
    );
  }
}

export default App;
