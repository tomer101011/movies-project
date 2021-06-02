import {createSlice} from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {},
  reducers: {
    getMovieOMDb: () => {},

    setMovieOMDb: (state, action) => {
    //   const {isManager} = action.payload;
    //   const movie = {isManager};
    //   return {...state, ...userData};
    },
  },
});

export const {getMovieOMDb, setMovieOMDb} = movieSlice.actions;
export default movieSlice.reducer;
