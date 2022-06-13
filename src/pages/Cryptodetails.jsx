import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Linecharts from '../components/charts/Linecharts';
import { useFetchAPI } from '../useFetchAPI';
import Loading from '../components/Loading';
import Cryptodata from '../components/Cryptodata';

function Cryptodetails() {
  const id = useParams().id;
  const [coin, setCoin] = useState(null);
  const { data, isLoading, isFailed } = useFetchAPI(
    `/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`
  );
  useEffect(() => {
    if (!data) return;
    setCoin(data.data);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isFailed ? (
        <h3>Error 404 </h3>
      ) : (
        <div className="crypto-detail">
          <div className="coin-pair">{/* <h3> {coin.symbol}/USD </h3> */}</div>
          <div className="chart">
            <Linecharts id={id} />
          </div>
          {coin ? <Cryptodata coin={coin} /> : ''}
        </div>
      )}
    </>
  );
}

export default Cryptodetails;
