import { Link } from 'react-router-dom';
import millify from 'millify';

function CryptoList({ coins }) {
  return (
    <div className="crypto-list">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Coins</th>
            <th scope="col">Price</th>
            <th scope="col">MarketCap</th>
            <th scope="col">changes 24hrs</th>
            <th>color</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.uuid}>
              <th> {coin.rank}</th>
              <td>
                <Link className="btn btn-dark" to={'/' + coin.uuid}>
                  <img
                    src={coin.iconUrl}
                    alt="Crypto"
                    className="img-container"
                  />
                  {coin.name}
                </Link>
              </td>
              <td>{millify(coin.price)}</td>
              <td>{millify(coin.marketCap)}</td>
              <td>{coin.change}</td>
              <td style={{ color: coin.color }}>col</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoList;
