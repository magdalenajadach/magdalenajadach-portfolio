import logo from './images/memo-software.PNG';
import './App.scss';

import Terminal from './components/Terminal/Terminal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yo!
        </p>
      </header>
      <Terminal />
    </div>
  );
}

export default App;
