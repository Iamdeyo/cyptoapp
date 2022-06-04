import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchAPI = (query) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFailed, setIsFailed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // console.log('req made');
      const options = {
        headers: {
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          'X-RapidAPI-Key':
            '2cfa09d383mshc59053a300b33efp105948jsnf68854d2e784',
        },
      };
      try {
        const res = await axios.get(
          'https://coinranking1.p.rapidapi.com' + query,
          options
        );

        if (res) {
          console.log(res);
          setData(res.data.data);
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
