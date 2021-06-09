import { call, put } from "redux-saga/effects";
import { requestGetMovieOMDb } from "../requests/movie";
import { setMovieOMDb } from "../../ducks/movie";

export function* handleGetMovieOMDb(action) {
    try {
        //yield is like await
        const searchInput = action.payload;
        const response = yield call(requestGetMovieOMDb, searchInput);
        const { data } = response;
        yield put(setMovieOMDb({ ...data }));
    } catch (error) {
        console.log(error);
    }
}
