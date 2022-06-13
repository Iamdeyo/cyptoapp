import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Cryptolist({ data, setOrder }) {
  const [coins, setCoins] = useState(null);
  const [sort, setSort] = useState('market_cap_');
  const [sortOrder, setSortOrder] = useState('desc');

  const sortFn = (e) => {
    setSort(e.target.value);
    // setOrder(sv);
  };

  useEffect(() => {
    setOrder(sort + sortOrder);
  }, [sort, sortOrder, setOrder]);

  const sortOrderFn = () => {
    if (sortOrder === '' || sortOrder === 'desc') {
      setSortOrder('asc');
    } else {
      setSortOrder('desc');
    }
  };

  useEffect(() => {
    if (data.data) {
      setCoins(data.data);
    }
  }, [data.data]);

  if (!coins) {
    return;
  }
  // console.log(coins);
  return (
    <div className="crypto-list">
      <h2>Cryptocurrency price </h2>
      <div className="filters">
        <span>Sort by:</span>
        <select onChange={sortFn}>
          <option value="market_cap_">Market Cap</option>
          <option value="volume_">Volume</option>
        </select>
        <div className={`icon-filters ${sortOrder}`} onClick={sortOrderFn}>
          <i className="fa-solid fa-caret-up"></i>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>

      <div className="tabs">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h %</th>
              <th>
                Price <br /> Change(24h)
              </th>
              <th>Market Cap</th>
              <th>Volume(24h)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td> {coin.market_cap_rank} </td>
                <td>
                  <Link to={'/crypto/' + coin.id}>
                    <div className="img-container">
                      <img src={coin.image} alt={coin.symbol} />
                    </div>{' '}
                    <div>
                      {coin.name} <span>{coin.symbol}</span>
                    </div>
                  </Link>
                </td>
                <td>
                  $
                  {coin.current_price
                    ? coin.current_price.toLocaleString('en-US')
                    : '--'}
                </td>
                <td>
                  <div
                    className={
                      coin.price_change_percentage_24h > 0
                        ? 'green'
                        : coin.price_change_percentage_24h === 0
                        ? 'normal'
                        : 'red'
                    }
                  >
                    {coin.price_change_percentage_24h
                      ? coin.price_change_percentage_24h.toLocaleString(
                          undefined,
                          { maximumFractionDigits: 2 }
                        )
                      : '--'}
                    %
                    <div className="icon">
                      <i className="fa-solid fa-caret-up"></i>
                      <i className="fa-solid fa-caret-down"></i>
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    className={
                      coin.price_change_24h > 0
                        ? 'green'
                        : coin.price_change_24h === 0
                        ? ''
                        : 'red'
                    }
                  >
                    {coin.price_change_24h
                      ? coin.price_change_24h.toLocaleString()
                      : '--'}
                    <div className="icon">
                      <i className="fa-solid fa-caret-up"></i>
                      <i className="fa-solid fa-caret-down"></i>
                    </div>
                  </div>
                </td>
                <td>
                  ${coin.market_cap ? coin.market_cap.toLocaleString() : '--'}
                </td>
                <td>
                  $
                  {coin.total_volume
                    ? coin.total_volume.toLocaleString()
                    : '--'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cryptolist;
