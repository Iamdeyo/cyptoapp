import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchAPI = (query) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFailed, setIsFailed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // console.log('req made');
      try {
        const res = await axios.get('https://api.coingecko.com/api/v3' + query);

        if (res) {
          // console.log(res);
          setData(res);
          setIsLoading(false);
          setIsFailed(null);
        }
      } catch (error) {
        console.log(error);
        setIsFailed(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return { data, isLoading, isFailed };
};
