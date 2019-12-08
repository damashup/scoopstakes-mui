import { all, call } from "redux-saga/effects";

import { onFetchMatchday } from "./for-fetching-a-matchday/on-fetch-matchday";

export function* matchdaySagas() {
  yield all([call(onFetchMatchday)]);
}
