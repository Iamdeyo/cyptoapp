import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useFetchAPI } from '../useFetchAPI';
import Exchangedata from '../components/Exchangedata';

function Exchangedetails() {
  const id = useParams().id;
  const { data, isLoading, isFailed } = useFetchAPI(`/exchanges/${id}`);
  if (isLoading) {
    return <Loading />;
  }
  if (isFailed) {
    return <h2> 404 error </h2>;
  }
  return (
    <div>
      <Exchangedata data={data} />
    </div>
  );
}

export default Exchangedetails;
