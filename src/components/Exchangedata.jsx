function Exchangedata({ data }) {
  return (
    <div className="exchange-data">
      <div>
        <div className="title">
          <div className="img-holder">
            <img src={data.data.image} alt="logo" />
          </div>
          <h3>
            {data.data.name}{' '}
            <h5>
              {' '}
              <small> Trust Score </small>{' '}
              <span
                className={`trs ${
                  data.data.trust_score >= 8
                    ? 'green'
                    : data.data.trust_score >= 5
                    ? 'orange'
                    : 'red'
                }`}
              >
                {data.data.trust_score}{' '}
              </span>
            </h5>
          </h3>
        </div>
        <p>{data.data.description}</p>
      </div>
      <div className="ed-flex">
        <div>
          <table>
            <tbody>
              <tr>
                <th>Website</th>
                <td>
                  {' '}
                  <a href={data.data.url}>{data.data.url}</a>{' '}
                </td>
              </tr>
              <tr>
                <th> Country </th>
                <td> {data.data.country} </td>
              </tr>
              <tr>
                <th> Year Created </th>
                <td>
                  {' '}
                  {data.data.year_established
                    ? data.data.year_established
                    : ''}{' '}
                </td>
              </tr>
              <tr>
                <th>Trading Vol. 24H </th>
                <td>
                  {' '}
                  {data.data.trade_volume_24h_btc
                    ? data.data.trade_volume_24h_btc.toLocaleString()
                    : ''}{' '}
                  BTC
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th> Twitter Handle </th>
                <td>
                  {' '}
                  <a href={`https://twitter.com/${data.data.twitter_handle}`}>
                    @{data.data.twitter_handle}
                  </a>{' '}
                </td>
              </tr>
              <tr>
                <th> Facebook </th>
                <td>
                  <a href={data.data.facebook_url}>
                    {data.data.facebook_url.split('/', 4)[3]}
                  </a>
                </td>
              </tr>
              <tr>
                <th> Reddit </th>
                <td>
                  <a href={data.data.reddit_url}>
                    {data.data.reddit_url.split('/', 5)[4]}
                  </a>
                </td>
              </tr>
              <tr>
                <th> Telegram </th>
                <td>
                  <a href={data.data.telegram_url}>
                    {data.data.telegram_url.split('/', 5)[4]}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Exchangedata;
