import {Route, Routes} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './Components/GlobalStyle';
import Layout from './Layout';
import Home from './Pages/Home';
import CreateMovie from './Pages/movie/Create';
import Detail from './Pages/movie/Detail';
import NowPlayingMovie from './Pages/movie/NowPlaying';
import PopularMovie from './Pages/movie/Popular';
import TopRatedMovie from './Pages/movie/TopRated';
import theme from './utils/constants/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now" element={<NowPlayingMovie />} />
            <Route path="/movie/top" element={<TopRatedMovie />} />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
