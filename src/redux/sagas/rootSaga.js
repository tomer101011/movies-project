import {takeLatest} from "redux-saga/effects";

import {handleGetManagerStatus} from "./handlers/user";
import {handleGetMovieOMDb} from "./handlers/movie";

import {getManagerStatus} from "../ducks/user";
import {getMovieOMDb} from '../ducks/movie';

//function*- generator functions. Allows to do async easier
export function* watcherSaga() {
  yield* [
    takeLatest(getManagerStatus.type, handleGetManagerStatus),
    takeLatest(getMovieOMDb.type, handleGetMovieOMDb)
  ]
}
