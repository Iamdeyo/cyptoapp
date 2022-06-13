import { Link } from 'react-router-dom';

function Pagination({ pageNumber, setPerPage }) {
  const pn = parseInt(pageNumber);
  const perPage = [10, 20, 30, 40, 50];

  const perPageFn = (e) => {
    setPerPage(e.target.value);
  };
  return (
    <>
      <div className="pagination">
        <Link to={'.?page=' + (pn - 1)} className={pn < 2 ? 'disable-btn' : ''}>
          <i className="fa-solid fa-arrow-left"></i> prev
        </Link>

        <h3>{' Page ' + pn}</h3>

        <Link to={'.?page=' + (pn + 1)}>
          next <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="filters">
        <span>Show rows</span>
        <select defaultValue={50} onChange={perPageFn}>
          {perPage.map((p) => (
            <option key={p}> {p} </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Pagination;
