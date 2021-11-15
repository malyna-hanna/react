import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Afcomponent from './Afcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent name='everybody'/>
        <Ccomponent name = 'Hanna'/>
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
          My first React app
        </a>
      </header>
    </div>
  );
}

export default App;
