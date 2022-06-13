import { useEffect } from 'react';
import { useState } from 'react';
import { useFetchAPI } from '../useFetchAPI';

function Globaldata() {
  const [global, setGlobal] = useState(null);
  const { data } = useFetchAPI('/global');
  useEffect(() => {
    if (!data) {
      return;
    }
    setGlobal(data.data.data);
  }, [data]);
  if (!global) {
    return;
  }

  return (
    <div className="global">
      <div className="gd">
        <h3> Active Cryptocurrency </h3>
        <p> {global.active_cryptocurrencies.toLocaleString()} </p>
      </div>
      <div className="gd">
        <h3> Total Market Cap </h3>
        <p> {global.total_market_cap.usd.toLocaleString()} </p>
      </div>
      <div className="gd">
        <h3> Markets </h3>
        <p> {global.markets} </p>
      </div>
      <div className="gd">
        <h3> Active ICO's </h3>
        <p> {global.ongoing_icos} </p>
      </div>
      <div className="gd">
        <h3> Upcoming ICO's </h3>
        <p> {global.upcoming_icos} </p>
      </div>
      <div className="gd">
        <h3> Ended ICO's </h3>
        <p> {global.ended_icos} </p>
      </div>
    </div>
  );
}

export default Globaldata;
