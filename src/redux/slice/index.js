import data from '../../utils/constants/data';
const {createSlice} = require('@reduxjs/toolkit');

const moviesSlice = createSlice({
  name: 'Movies Slice',
  initialState: data,
  reducers: {
    addMovieDispatch(state, action) {
      state.push(action.payload);
    },
    updateMovieDispatch(state, action) {
      return action.payload;
    },
  },
});

const moviesReducer = moviesSlice.reducer;
const {addMovieDispatch, updateMovieDispatch} = moviesSlice.actions;

export default moviesReducer;
export {addMovieDispatch, updateMovieDispatch};
