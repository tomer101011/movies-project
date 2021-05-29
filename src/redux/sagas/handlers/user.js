import { call, put } from "redux-saga/effects";
import { requestGetManagerStatus } from "../requests/user";
import { setManagerStatus } from "../../ducks/user";

export function* handleGetManagerStatus() {
    try {
        //yield is like await
        console.log('entered');
        const response = yield call(requestGetManagerStatus);
        const { data } = response;
        yield put(setManagerStatus({ ...data }));
    } catch (error) {
        console.log(error);
    }
}
