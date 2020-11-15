import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import PersonList from './components/PersonList';

class App extends React.Component {
  state = {
    person: [],
  };

  componentDidMount() {
    this.getPerson();
  }

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
    return (
      <div className="App">
        <Header title="Je commence à comprendre" />
        <PersonList person={this.state.person} />
        <Footer year="2020 " authorName="Cédric Priouret" />
      </div>
    );
  }
}

export default App;
