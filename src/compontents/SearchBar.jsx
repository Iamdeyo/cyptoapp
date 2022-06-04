import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchAPI } from '../useFetchAPI';
import millify from 'millify';

function SearchBar() {
  const [searchedCoinsData, setSearchedCoinsData] = useState([]);
  const [search, setSearch] = useState('');
  const [modalDisplay, setModalDisplay] = useState({ display: 'none' });

  const { data, isLoading, isFailed } = useFetchAPI(
    '/search-suggestions?query=' + search
  );

  useEffect(() => {
    if (data) {
      setSearchedCoinsData(data.coins);
    }
  }, [data, search]);

  window.addEventListener('click', () => {
    setModalDisplay({ display: 'none' });
  });
  return (
    <>
      <div className="search-bar">
        <div>
          <input
            type="search"
            placeholder="Search coins or exchanges"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onClick={(e) => {
              e.stopPropagation();
              setModalDisplay({ display: 'block' });
            }}
          />
          <div style={modalDisplay} className="search-modal">
            <table>
              <thead>
                <tr>
                  <th>Coins</th>
                  <td className="text-r">
                    <Link to={'/crypto'}>All coins</Link>
                  </td>
                </tr>
              </thead>
              <tbody>
                {searchedCoinsData.map((coins) => (
                  <tr style={{ marginTop: '10px' }} key={coins.uuid}>
                    <td>
                      <div className="img-container">
                        <img src={coins.iconUrl} alt="" />
                      </div>
                      <Link to={'/crypto/' + coins.uuid}>
                        <div>{coins.name}</div>
                      </Link>
                    </td>
                    <td className="text-r">
                      $
                      {millify(coins.price, {
                        precision: 2,
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
