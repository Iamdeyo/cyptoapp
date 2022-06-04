import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Coininfo from './Coininfo';
import Cryptocurrency from './Cryptocurrency';
import SearchBar from '../compontents/SearchBar';

function Home() {
  return (
    <main>
      <SearchBar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/crypto" exact element={<Cryptocurrency />} />
        <Route path="/crypto/:id" exact element={<Coininfo />} />
      </Routes>
    </main>
  );
}

export default Home;
