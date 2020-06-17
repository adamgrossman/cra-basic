import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { commonReducer } from "./common";

const reducers = combineReducers({
  common: commonReducer
});

export function* rootSaga() {
  yield all([]);
}

export default reducers;
