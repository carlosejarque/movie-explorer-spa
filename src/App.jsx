import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetail';
import SearchMovie from './pages/SearchMovie';
import SearchBar from './components/SearchBar';
import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <header className="main-header">
        <Link to="/" className="logo">🎬 MovieLand</Link>
        <SearchBar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/search" element={<SearchMovie />} />
      </Routes>
    </BrowserRouter>
  );
}
