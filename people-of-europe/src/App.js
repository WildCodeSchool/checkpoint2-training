import './App.css';
import Header from "./components/Header";
import Person from "./components/Person";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Les Wilders aux plus beaux cheveux"/>
      <Person firstName="Floran" lastName="Eiclies" pic="https://s1.qwant.com/thumbr/0x380/2/d/294a4c28bb11a9392db6915c19d0b909bdcb75c2c9a9c1a98fe3d503281e97/GettyImages-483649572-5a8b8f8fc5542e0037d51d19.jpg?u=https%3A%2F%2Ffthmb.tqn.com%2FCFMVn5Cq0uKW6WIII2UCFnbbJnQ%3D%2F3000x2355%2Ffilters%3Afill%28auto%2C1%29%2FGettyImages-483649572-5a8b8f8fc5542e0037d51d19.jpg&q=0&b=1&p=0&a=1" city="Périgueux" country="France"/>
      <Person firstName="Alexandre" lastName="Chauvin" pic="https://s2.qwant.com/thumbr/0x380/d/d/c278eb030e774346683c18e7e2bcc5d2dde17e8c5e634c9d822dd4c6ad9d1a/Daniel-Radcliffe-Hair.jpg?u=http%3A%2F%2Fwww.mens-hairstyle.com%2Fwp-content%2Fuploads%2F2016%2F05%2FDaniel-Radcliffe-Hair.jpg&q=0&b=1&p=0&a=1" city="Marseille" country="France"/>
      <Footer year="2020" authorName="Floran Eiclies"/>
    </div>
  );
}

export default App;
