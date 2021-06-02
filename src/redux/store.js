import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import userReducer from './ducks/user';
import movieReducer from './ducks/movie';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    user: userReducer,
    movie: movieReducer,
});

//same store config every time
const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

//run the watcherSaga to listen to every redux action that is dispatched
sagaMiddleware.run(watcherSaga);

export default store;
