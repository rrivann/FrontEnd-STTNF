/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import DetailMovie from '../../Components/DetailMovie';
import Movies from '../../Components/Movies/Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

const Detail = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState('');

  const getRecommendationMovies = async () => {
    const {data} = await axios(ENDPOINTS.RECOMMENDATIONS(id));
    setMovie(data.results);
  };

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  return (
    <>
      <DetailMovie />
      {movie && <Movies movies={movie} title="Recommendation Movie" />}
    </>
  );
};

export default Detail;
