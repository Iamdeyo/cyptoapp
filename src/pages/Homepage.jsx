import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchAPI } from '../useFetchAPI';

function Homepage() {
  // const [coinlist, setCoinlist] = useState([]);
  // const [query, setQuery] = useState('');

  const { data, isFailed, isLoading } = useFetchAPI('/coins?limit=3');

  // console.log(data);

  return <div className="homepage"> homepage</div>;
}

export default Homepage;
