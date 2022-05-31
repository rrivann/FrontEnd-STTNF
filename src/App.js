import Home from './Pages/Home';
import CreateMovie from './Pages/movie/Create';
import PopularMovie from './Pages/movie/Popular';
import NowPlayingMovie from './Pages/movie/NowPlaying';
import TopRatedMovie from './Pages/movie/TopRated';
import {Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import {ThemeProvider} from 'styled-components';
import theme from './utils/constants/theme';
import GlobalStyle from './Components/GlobalStyle';

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
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
