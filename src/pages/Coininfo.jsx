import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Coininfo() {
  const [coininfo, setcoininfo] = useState('');

  const id = useParams().id;

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coin/' + id,
      params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h' },
      headers: {
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        'X-RapidAPI-Key': '2cfa09d383mshc59053a300b33efp105948jsnf68854d2e784',
      },
    };
    const fetchData = async () => {
      try {
        const res = await axios.request(options);
        setcoininfo(res.data.data.coin);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container coininfo">
      <div className="row mt-5">
        <div className="col-12 col-md-4">
          <div className="coinimg">
            <img
              src={coininfo.iconUrl}
              alt={coininfo.name}
              name={coininfo.name}
              className="img-thumbnail"
            />
          </div>
          <div className="text-center">{coininfo.name}</div>
        </div>
      </div>
    </div>
  );
}

export default Coininfo;
