import logo from './images/memo-software.PNG';
import './Header.scss';


function Header() {
  return (
    <div>
      <div className="header__wrapper">
        <header className="header">
          <img src={logo} className="header__logo" alt="" />
          <h1>
            Hello, I'm Magda
          </h1>
          <h2>I like computers and mud</h2>
          <a aria-label="Navigate to Github portfolio" href='https://github.com/magdalenajadach'>
            <span className='github__logo'></span>
          </a>
        </header>
      </div>
    </div>
  );
}

export default Header;
