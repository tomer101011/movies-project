import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "movie",
    initialState: {},
    reducers: {
        getMovieOMDb: () => {},

        setMovieOMDb: (state, action) => {
            const movieOMDb = action.payload;
            return { ...state, ...movieOMDb };
        },
    },
});

export const { getMovieOMDb, setMovieOMDb } = movieSlice.actions;
export default movieSlice.reducer;
