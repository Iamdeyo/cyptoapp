import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchAPI } from '../useFetchAPI';

function Searchbar() {
  const [searchResult, setSearchResult] = useState('');
  const [search, setSearch] = useState('');
  const [coinR, setCoinR] = useState([]);
  const [excR, setExcR] = useState([]);

  const { data } = useFetchAPI(`/search?query=${search}`);
  const displaySR = (e) => {
    if (searchResult === '') {
      setSearchResult('active');
    }
    setSearch(e.target.value);
  };
  const hideSR = (e) => {
    if (searchResult === 'active') {
      setSearchResult('');
    }
  };
  if (search === '') {
    hideSR();
  }
  window.addEventListener('click', hideSR);

  useEffect(() => {
    if (!data) {
      return;
    }
    setCoinR(data.data.coins.slice(0, 5));
    setExcR(data.data.exchanges.slice(0, 5));
  }, [data]);
  return (
    <div className="search-bar" onClick={(e) => e.stopPropagation()}>
      <div className="input">
        <i className="fa-solid fa-search"></i>
        <input
          type="search"
          onChange={displaySR}
          onClick={() => {}}
          value={search}
          placeholder="Search coins & exchanges...."
        />
      </div>
      <div className={`search-results ${searchResult}`}>
        <div className="sd">
          <h3>
            coins{' '}
            <Link
              onClick={(e) => {
                hideSR();
                setSearch('');
              }}
              to={'/crypto'}
            >
              all coins
            </Link>
          </h3>
          <table>
            <tbody>
              {coinR.map((coin) => (
                <tr key={coin.id}>
                  <th>
                    <Link
                      onClick={(e) => {
                        hideSR();
                        setSearch('');
                      }}
                      to={`/crypto/${coin.id}`}
                    >
                      {coin.name} ({coin.symbol})
                    </Link>
                  </th>
                  <td>
                    <div className="img-holder">
                      <img src={coin.large} alt="logo" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sd">
          <h3>
            Exchanges{' '}
            <Link
              onClick={(e) => {
                hideSR();
                setSearch('');
              }}
              to={'/exchanges'}
            >
              all exchanges
            </Link>
          </h3>
          <table>
            <tbody>
              {excR.map((exc) => (
                <tr key={exc.id}>
                  <th>
                    <Link
                      onClick={(e) => {
                        hideSR();
                        setSearch('');
                      }}
                      to={`/exchanges/${exc.id}`}
                    >
                      {exc.name}
                    </Link>
                  </th>
                  <td>
                    <div className="img-holder">
                      <img src={exc.large} alt="logo" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
