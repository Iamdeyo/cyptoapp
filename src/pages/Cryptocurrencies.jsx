import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cryptolist from '../components/Cryptolist';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import { useFetchAPI } from '../useFetchAPI';

function Cryptocurrencies() {
  const [order, setOrder] = useState('');
  const [perPage, setPerPage] = useState(50);
  const [page, setPage] = useState(1);
  const pageQ = useLocation();

  const { data, isLoading, isFailed } = useFetchAPI(
    `/coins/markets?vs_currency=usd&order=${order}&per_page=${perPage}&page=${page}`
  );

  useEffect(() => {
    if (pageQ.search === '') {
      return;
    }
    setPage(pageQ.search.split('=', 2)[1]);
  }, [pageQ.search]);
  return (
    <div className="cryptocurrencies">
      {isLoading ? (
        <Loading />
      ) : isFailed ? (
        <h3> 404 error </h3>
      ) : (
        <div className="cypto">
          <Cryptolist data={data} setOrder={setOrder} />
          <Pagination pageNumber={page} setPerPage={setPerPage} />
        </div>
      )}
    </div>
  );
}

export default Cryptocurrencies;
