import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Exchangelist({ data }) {
  const [exchanges, setExchanges] = useState([]);
  useEffect(() => {
    setExchanges(data.data);
  }, [data]);
  return (
    <div className="exchange-list">
      <div className="tabs">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Trust score</th>
              <th>Trade volume (24h)</th>
              <th>country</th>
              <th>Year established</th>
            </tr>
          </thead>
          <tbody>
            {exchanges.map((exc) => (
              <tr key={exc.id}>
                <td>{exc.trust_score_rank}</td>
                <td>
                  <Link to={'/exchanges/' + exc.id}>
                    <div className="img-container">
                      <img src={exc.image} alt={exc.name} />
                    </div>
                    <div>{exc.name}</div>
                  </Link>
                </td>
                <td>
                  <div
                    className={`trs ${
                      exc.trust_score >= 8
                        ? 'green'
                        : exc.trust_score >= 5
                        ? 'orange'
                        : 'red'
                    }`}
                  >
                    {exc.trust_score}
                  </div>
                </td>
                <td>{exc.trade_volume_24h_btc.toLocaleString()} BTC</td>
                <td> {exc.country} </td>
                <td> {exc.year_established} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Exchangelist;
