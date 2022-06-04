import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <div className="title">
            <div className="logo">
              <img src="" alt="" />
            </div>
            <h2>DT Crypto App</h2>
          </div>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/crypto'}> Cryptocurrency </Link>
            </li>
            <li>
              <Link to={'/exchanges'}> Exchange </Link>
            </li>
            <li>
              <Link to={'/'}> News </Link>
            </li>
          </ul>
        </div>
        <footer>
          <em>&copy; Copyright DT Coders </em>
        </footer>
      </div>
    </>
  );
}

export default Sidebar;
