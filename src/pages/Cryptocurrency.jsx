import { useEffect, useState } from 'react';
import { useFetchAPI } from '../useFetchAPI';
import CryptoList from '../compontents/CryptoList';

function Cryptocurrency() {
  const [coins, setCoins] = useState([]);

  const { data, isFailed, isLoading } = useFetchAPI('/coins?limit=5');
  useEffect(() => {
    if (data) {
      setCoins(data.coins);
    }
  }, [data]);

  return (
    <div>
      <div className="cryptocurrency">
        <div className="crypto-heading">
          <h3>Cryptocurrency price list</h3>
        </div>
        <div className="crypto-body">
          {isLoading ? (
            <h1> Loading </h1>
          ) : isFailed ? (
            <h1>
              error {isFailed.response.status} - {isFailed.response.statusText}
            </h1>
          ) : (
            <CryptoList coins={coins} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cryptocurrency;
