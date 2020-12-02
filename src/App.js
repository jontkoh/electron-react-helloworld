import logo from './logo.svg';
import './App.css';
const name = "user";
const element = <h1>hello, {name}</h1>;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {element}
        </p>
      </header>
    </div>
  );
}

export default App;
