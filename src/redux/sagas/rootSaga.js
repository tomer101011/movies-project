import {takeLatest} from "redux-saga/effects";
import {handleGetManagerStatus} from "./handlers/user";
import {getManagerStatus} from "../ducks/user";

//function*- generator functions. Allows to do async easier
export function* watcherSaga() {
      yield takeLatest(getManagerStatus.type, handleGetManagerStatus);
    }
    