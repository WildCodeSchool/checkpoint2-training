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
    };
  }

  fetchPersons = () => {
    // axios.get => lance la requête
    axios.get('https://my-json-server.typicode.com/bhubr/people-api/people')
      // .then (then = alors/ensuite) => spécifier ce que je dois faire quand
      // je reçois la réponse du serveur
      .then((response) => {
        return response.data;
      })
      .then(persons => {
        this.setState({
          persons: persons
        });
      });
  }

  handleChangeGender = (event) => {
    this.setState({
      genderFilter: event.target.value,
    });
  }

  componentDidMount() {
    this.fetchPersons();
  }

  render() {
    const { persons, genderFilter } = this.state;
    const filteredPersons = genderFilter === ''
      ? persons
      : persons.filter((person) => person.gender === genderFilter);
    return (
      <div className="App">
        <Header title="People of Europe" />
        <div>
          <label htmlFor="genderSelect">
            <select id="genderSelect" value={genderFilter} onChange={this.handleChangeGender}>
              <option value="">&mdash;</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>
        </div>
        <PersonList persons={filteredPersons} />
        <Footer year="2020" authorName="Benoît Hubert" />
      </div>
    );
  }
}

export default App;
