import logo from './images/memo-software.PNG';
import './Header.scss';


function Header() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Hello, I'm Magda
          </h1>
          <h2>I like computers and muddy rocks</h2>
        </header>
      </div>
    </div>
  );
}

export default Header;
