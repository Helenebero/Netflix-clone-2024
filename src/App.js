import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tvshows from './pages/Tvshows/Tvshows';
import Movies from './pages/Movies/Movies';
import Toprated from './pages/Toprated/Toprated';
import Trending from './pages/Trending/Trending';
import Documentaries from './pages/Documentaries/Documentaries';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/toprated" element={<Toprated />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/documentaries" element={<Documentaries />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
