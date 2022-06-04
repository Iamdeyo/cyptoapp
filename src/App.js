import './App.css';
import Bottombar from './compontents/Bottombar';
import Navbar from './compontents/Navbar';
import Sidebar from './compontents/Sidebar';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Sidebar />
          <Home />
        </div>
        <Bottombar />
      </BrowserRouter>
    </>
  );
}
export default App;
