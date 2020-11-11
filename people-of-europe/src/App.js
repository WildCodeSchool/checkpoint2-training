import "./App.css";
import Header from "./components/Header";
import Person from "./components/Person";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header title="React is a nightmare" />
      <Person />
      <Footer />
    </div>
  );
}

export default App;
