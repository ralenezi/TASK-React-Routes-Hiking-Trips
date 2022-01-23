import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import TripsList from './components/TripsList';
import TripDetail from './components/TripDetail';
import { Routes, Route } from 'react-router';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<TripsList />} />
        <Route path="/details/:tripId" element={<TripDetail />} />
      </Routes>
    </>
  );
}
export default App;
