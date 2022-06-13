import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchAPI } from '../useFetchAPI';

function Trending() {
  const [trending, setTreanding] = useState(null);
  const { data } = useFetchAPI(`/search/trending`);

  useEffect(() => {
    if (!data) {
      return;
    }
    setTreanding(data.data.coins);
  }, [data]);

  if (!trending) {
    return;
  }

  return (
    <>
      <div className="sd">
        <h3>
          Trending{' '}
          <div className="img-holder">
            <img
              src="https://w7.pngwing.com/pngs/518/377/png-transparent-flame-on-surface-flame-fire-hot-wheels-light-fire-wheel-the-same-fire-logo-free-logo-design-template-orange-logo-thumbnail.png"
              alt="hot"
            />
          </div>
        </h3>
        <table>
          <tbody>
            {trending.map((tr) => (
              <tr key={tr.item.id}>
                <th>#{tr.item.market_cap_rank}</th>
                <th>
                  {' '}
                  <p> </p>
                  <Link to={`/crypto/${tr.item.id}`}>
                    {tr.item.name} ({tr.item.symbol})
                  </Link>
                </th>
                <td>
                  <div className="img-holder">
                    <img src={tr.item.large} alt="logo" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Trending;
