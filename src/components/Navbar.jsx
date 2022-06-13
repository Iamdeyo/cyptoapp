import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/DTlogo.png';

function Navbar({ switchTheme }) {
  const [slidein, setSlidein] = useState(true);
  const slideinFn = () => {
    slidein ? setSlidein(false) : setSlidein(true);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-img">
          <img src={logo} alt="DT" />
        </div>

        <Link to={'/'}> DT Crypto </Link>
      </div>
      <nav className={slidein ? '' : 'slideIn'}>
        <ul>
          <li onClick={slideinFn}>
            <Link to={'/'}> Dashboard </Link>
          </li>
          <li onClick={slideinFn}>
            <Link to={'/crypto'}> Cryptocurrencies </Link>
          </li>
          <li onClick={slideinFn}>
            <Link to={'/exchanges'}> Exchanges </Link>
          </li>
        </ul>
      </nav>
      <div className="toggle-btn" onClick={switchTheme}>
        <i className="fa-solid fa-sun"></i>
        <i className="fa-solid fa-moon"></i>
      </div>
      <div className="hamburger" onClick={slideinFn}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
