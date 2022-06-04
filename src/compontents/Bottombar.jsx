import { Link } from 'react-router-dom';

function Bottombar() {
  return (
    <>
      <div className="bottom-bar">
        <ul>
          <li>
            <Link to={'/'}>
              <span className="icon">
                <i className="fa-solid fa-house-chimney"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <span className="icon">
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link to={'/crypto'}>
              <span className="icon">
                <i className="fa-solid fa-bitcoin-sign"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <span className="icon">
                <i className="fa-solid fa-newspaper"></i>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Bottombar;
