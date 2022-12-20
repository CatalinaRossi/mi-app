import logo from './logo.svg';
import './App.css';

const name = "Rafa";


var numero1 = 5
var numero2 = 3
const suma = numero1 + numero2;
const welcome = <h1> Hola Gente!, cómo estas {name}, son las {suma}?</h1>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {welcome}
        </a>
      </header>
    </div>
  );
}

export default App;
