import Home from './Pages/Home';
import CreateMovie from './Pages/movie/Create';
import PopularMovie from './Pages/movie/Popular';
import NowPlayingMovie from './Pages/movie/NowPlaying';
import TopRatedMovie from './Pages/movie/TopRated';
import {Route, Routes} from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<PopularMovie />} />
          <Route path="/movie/now" element={<NowPlayingMovie />} />
          <Route path="/movie/top" element={<TopRatedMovie />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
