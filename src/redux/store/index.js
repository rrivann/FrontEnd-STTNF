import moviesReducer from '../slice';
const {configureStore} = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
