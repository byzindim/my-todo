import logo from './logo.svg';
import './App.css';

const logged = false;
const text = "Hello"
const Field = () => {
  const text = "Log in"
  return <button>{logged ? "Enter" : text}</button>
}
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
          Learn React
        </a>
        <Field/>
      </header>
    </div>
  );
}
export {Field};
export default App;
