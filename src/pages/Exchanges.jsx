import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import { useFetchAPI } from '../useFetchAPI';
import Exchangelist from '../components/Exchangelist';
import Loading from '../components/Loading';
import { useLocation } from 'react-router-dom';

function Exchanges() {
  const [perPage, setPerPage] = useState(50);
  const [page, setPage] = useState(1);
  const pageQ = useLocation();

  const { data, isLoading, isFailed } = useFetchAPI(
    `/exchanges?per_page=${perPage}&page=${page}`
  );

  useEffect(() => {
    if (pageQ.search === '') {
      return;
    }
    setPage(pageQ.search.split('=', 2)[1]);
  }, [pageQ.search]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isFailed ? (
        <h3>Error 404 </h3>
      ) : (
        <div className="exchanges">
          <Exchangelist data={data} />
          <Pagination pageNumber={page} setPerPage={setPerPage} />
        </div>
      )}
    </>
  );
}

export default Exchanges;
