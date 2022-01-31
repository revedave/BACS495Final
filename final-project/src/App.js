<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

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
      </header>
=======
import './App.css';
import Header from './Header.js';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Footer/>
>>>>>>> c2a0dd0283f8ddf27792325c1edaa24dc8eb76b0
    </div>
  );
}

export default App;
