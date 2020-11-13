import Header from './components/Header';
import Footer from './components/Footer';
import PersonList from './components/PersonList';

function App() {
  return (
    <div className="App">
      <Header title="People of Europe" />
      <PersonList />
      <Footer year="2020" authorName="Benoît Hubert" />
    </div>
  );
}

export default App;
