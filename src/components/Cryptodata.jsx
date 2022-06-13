import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Cryptodata({ coin }) {
  const [img, setImg] = useState('');
  const [desc, setDesc] = useState('');
  const [links, setLinks] = useState('');
  const [mkData, setMkData] = useState('');
  const [readMore, setReadMore] = useState(false);

  const clickReadMore = () => {
    readMore ? setReadMore(false) : setReadMore(true);
  };

  useEffect(() => {
    if (coin === {}) {
      return;
    }
    setImg(coin.image.large);
    setDesc(coin.description.en);
    setMkData(coin.market_data);
    setLinks(coin.links);
  }, [coin]);

  if (links === '') {
    return;
  }
  if (mkData === '') {
    return;
  }

  const pd = mkData.high_24h.usd - mkData.low_24h.usd;
  const cp = mkData.current_price.usd - mkData.low_24h.usd;
  const pp = (cp * 100) / pd;

  return (
    <div className="crypto-data">
      <div className="cd1">
        <div>
          <div className="img-holder">
            <img src={img} alt="bitcoin" />
          </div>
          <div>
            <h2>
              {coin.name} <span>({coin.symbol})</span>
            </h2>
            <h3>
              $
              {mkData.current_price.usd
                ? mkData.current_price.usd < 0
                  ? mkData.current_price.usd.toLocaleString()
                  : mkData.current_price.usd
                : ''}
              <span
                className={
                  mkData.price_change_percentage_24h > 0
                    ? 'green'
                    : mkData.price_change_percentage_24h < 0
                    ? 'red'
                    : ''
                }
              >
                {mkData.price_change_percentage_24h
                  ? mkData.price_change_percentage_24h.toLocaleString()
                  : ''}
                % &nbsp;
                <div className="icon">
                  <i className="fa-solid fa-caret-up"></i>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </span>
            </h3>
          </div>
        </div>
        <div className="meter">
          <div className="meter-bar">
            <span style={{ width: `${pp}%` }}> </span>
          </div>
          <div className="values">
            <p>
              {mkData.low_24h.usd
                ? mkData.low_24h.usd < 0
                  ? mkData.low_24h.usd.toLocaleString()
                  : mkData.low_24h.usd
                : ''}
            </p>

            <p>
              {mkData.high_24h.usd
                ? mkData.high_24h.usd < 0
                  ? mkData.high_24h.usd.toLocaleString()
                  : mkData.high_24h.usd
                : ''}
            </p>
          </div>
          <div className="values label">
            <p>24H low</p>
            <p>24H high</p>
          </div>
        </div>
        <div className={readMore ? 'p readall' : 'p'}>
          <p dangerouslySetInnerHTML={{ __html: desc }} />
          <button onClick={clickReadMore}> read more </button>
        </div>
      </div>
      <div className="cd2">
        <h3>{coin.name} price data</h3>
        <table>
          <tbody>
            <tr>
              <th> Price </th>
              <td>
                $
                {mkData.current_price.usd
                  ? mkData.current_price.usd < 0
                    ? mkData.current_price.usd.toLocaleString()
                    : mkData.current_price.usd
                  : ''}
              </td>
            </tr>
            <tr>
              <th> Price change(24hrs)</th>
              <td>
                $
                {mkData.price_change_24h
                  ? mkData.price_change_24h.toLocaleString('en-US', {
                      minimumSignificantDigits: 4,
                      maximumSignificantDigits: 7,
                    })
                  : ''}
              </td>
            </tr>
            <tr>
              <th> Market cap rank</th>
              <td>#{mkData.market_cap_rank}</td>
            </tr>
            <tr>
              <th> Market cap</th>
              <td>
                ${' '}
                {mkData.market_cap.usd
                  ? mkData.market_cap.usd.toLocaleString()
                  : ''}
              </td>
            </tr>
            <tr>
              <th> Market cap Change(24hrs)</th>
              <td>
                ${' '}
                {mkData.market_cap_change_24h
                  ? mkData.market_cap_change_24h.toLocaleString()
                  : ''}
              </td>
            </tr>
            <tr>
              <th> Market cap change in %(24hrs)</th>
              <td>
                {mkData.market_cap_change_percentage_24h
                  ? mkData.market_cap_change_percentage_24h.toLocaleString()
                  : ''}
                %
              </td>
            </tr>
            <tr>
              <th> Total Supply </th>
              <td>
                {mkData.total_supply
                  ? mkData.total_supply.toLocaleString()
                  : ''}{' '}
                {coin.symbol}
              </td>
            </tr>
            <tr>
              <th> Total Volume </th>
              <td>
                ${' '}
                {mkData.total_volume.usd
                  ? mkData.total_volume.usd.toLocaleString()
                  : ''}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cd3">
        <h3>{coin.name} Soical data</h3>
        <table>
          <tbody>
            <tr>
              <th>Blockchain Sites</th>

              <td>
                <a href={links.blockchain_site[0]}>
                  {links.blockchain_site[0].split('/', 3)[2]}
                </a>
              </td>
            </tr>
            <tr>
              <th>Homepage</th>
              <td>
                <a href={links.homepage[0]}>{links.homepage[0]}</a>
              </td>
            </tr>
            <tr>
              <th>Facebook</th>
              <td>
                <a href={'https://facebook.com/' + links.facebook_username}>
                  {links.facebook_username}
                </a>
              </td>
            </tr>
            <tr>
              <th>Telegram</th>
              <td>
                <a href={links.telegram_channel_identifier}>
                  {links.telegram_channel_identifier}
                </a>
              </td>
            </tr>
            <tr>
              <th>Twitter</th>
              <td>
                <a href={'https://twitter.com/' + links.twitter_screen_name}>
                  @{links.twitter_screen_name}
                </a>
              </td>
            </tr>
            <tr>
              <th>Reddit</th>
              <td>
                <a href={links.subreddit_url}>{links.subreddit_url}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cryptodata;
