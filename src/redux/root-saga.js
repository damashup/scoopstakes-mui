import { all, call } from "redux-saga/effects";

import { directorySagas } from "./directory/sagas/directory.sagas";
import { matchdaySagas } from "./matchday/sagas/matchday.sagas";
import { resultSagas } from "./result/sagas/result.sagas";
import { roundSagas } from "./round/sagas/round.sagas";
import { teamSagas } from "./team/sagas/team.sagas";
import { userSagas } from "./user/sagas/user.sagas";

export default function* rootSaga() {
  yield all([
    call(directorySagas),
    call(matchdaySagas),
    call(resultSagas),
    call(roundSagas),
    call(teamSagas),
    call(userSagas)
  ]);
}
