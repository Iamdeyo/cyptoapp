import Globaldata from '../components/Globaldata';
import Topcrypto from '../components/Topcrypto';
import Trending from '../components/Trending';

function Dashboard() {
  return (
    <div className="dashboard">
      <Globaldata />
      <div className="trending-top">
        <Trending />
        <Topcrypto />
      </div>
    </div>
  );
}

export default Dashboard;
