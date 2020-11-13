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
      persons: []
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

  render() {
    const { persons } = this.state;
    return (
      <div className="App">
        <Header title="People of Europe" />
        <PersonList persons={persons} />
        <button type="button" onClick={this.fetchPersons}>Fetch persons</button>
        <Footer year="2020" authorName="Benoît Hubert" />
      </div>
    );
  }
}

export default App;
