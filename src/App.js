import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Cryptocurrencies from './pages/Cryptocurrencies';
import Cryptodetails from './pages/Cryptodetails';
import Exchanges from './pages/Exchanges';
import Exchangedetails from './pages/Exchangedetails';
import useLocalStorage from 'use-local-storage';
import Searchbar from './components/Searchbar';

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
  const switchTheme = () => {
    const newtheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newtheme);
  };
  return (
    <>
      <BrowserRouter>
        <div className="app" data-theme={theme}>
          <Navbar switchTheme={switchTheme} />
          <Searchbar />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/crypto" exact element={<Cryptocurrencies />} />
              <Route path="/crypto/:id" exact element={<Cryptodetails />} />
              <Route path="/exchanges" exact element={<Exchanges />} />
              <Route
                path="/exchanges/:id"
                exact
                element={<Exchangedetails />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
