import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchAPI } from '../useFetchAPI';

function Topcrypto() {
  const [topCrypto, setTopCrypto] = useState(null);

  const { data } = useFetchAPI(
    '/coins/markets?vs_currency=usd&order=gecko_desc&per_page=7&page=1&sparkline=false'
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setTopCrypto(data.data);
  }, [data]);

  if (!topCrypto) {
    return;
  }

  return (
    <>
      <div className="sd">
        <h3>Top 7 cryptocurrency </h3>
        <table>
          <tbody>
            {topCrypto.map((tr) => (
              <tr key={tr.id}>
                <th>#{tr.market_cap_rank}</th>
                <th>
                  {' '}
                  <p> </p>
                  <Link to={`/crypto/${tr.id}`}>
                    {tr.name} ({tr.symbol})
                  </Link>
                </th>
                <td>
                  <div className="img-holder">
                    <img src={tr.image} alt="logo" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
    // <>
    //   <div className="sd">
    //     <h3>
    //       Trending{' '}
    //       <div className="img-holder">
    //         <img
    //           src="https://w7.pngwing.com/pngs/518/377/png-transparent-flame-on-surface-flame-fire-hot-wheels-light-fire-wheel-the-same-fire-logo-free-logo-design-template-orange-logo-thumbnail.png"
    //           alt="hot"
    //         />
    //       </div>
    //     </h3>
    //     <table>
    //       <tbody>
    //         {topCrypto.map((tr) => (
    //           <tr key={tr.item.id}>
    //             <th>#{tr.item.market_cap_rank}</th>
    //             <th>
    //               {' '}
    //               <p> </p>
    //               <Link to={`/crypto/${tr.item.id}`}>
    //                 {tr.item.name} ({tr.item.symbol})
    //               </Link>
    //             </th>
    //             <td>
    //               <div className="img-holder">
    //                 <img src={tr.item.large} alt="logo" />
    //               </div>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </>
  );
}

export default Topcrypto;
