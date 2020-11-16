import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    this.getPeople();
  }

  getPeople = () => {
    axios
      .get("https://my-json-server.typicode.com/bhubr/people-api/people")
      .then((response) => response.data)
      .then((data) =>
        this.setState({
          persons: data,
        })
      );
  };

  render() {
    return (
      <div className="App">
        <Header title="This is a state title" />
        <PersonList persons={this.state.persons} />
        {/* <button type="button" onClick={this.getPeople}>
          Get People
        </button> */}
        <Footer year="2020" authorName="Vivien Michelesi" />
      </div>
    );
  }
}

/* const App = () => {
  return (
    <div className="App">
      <Header title="This is a props title" />
      <Person
        firstName="Foo"
        lastName="Bar"
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/200px-Missing_avatar.svg.png"
        city="Paris"
        country="France"
      />
      <Person
        firstName="Big"
        lastName="Foot"
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/200px-Missing_avatar.svg.png"
        city="XianYui"
        country="Tibet"
      />
      <Footer year="2020" authorName="Vivien Michelesi" />
      <PersonList />
    </div>
  );
}; */

export default App;
