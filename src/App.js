import logo from './logo.svg';
import './App.css';

function App() {
  var nombre = "Nico Encina";
  var presentacion = <h2>hola, soy {nombre}</h2>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo.
        </p>
        {presentacion}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
