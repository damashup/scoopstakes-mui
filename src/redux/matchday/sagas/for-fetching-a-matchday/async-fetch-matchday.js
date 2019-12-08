import { put } from "redux-saga/effects";

import fetchMatchdaySuccess from "../../actions/fetch-matchday/success";
import fetchMatchdayFailure from "../../actions/fetch-matchday/failure";
import {FOOTBALL_DATA_TOKEN} from '../../../../config';
import ConvertFdApiDataToFixtures from "./convertFdApiDataToFixtures";

export function* asyncFetchMatchday({ payload: { dateString } }) {
  try {
    const sourceFootballData = yield fetch(
      `https://api.football-data.org/v2/matches/?dateFrom=${dateString}&dateTo=${dateString}`,
      { headers: { "X-Auth-Token": FOOTBALL_DATA_TOKEN } } // 
    ).then(res => {
      console.log(res);
      return res.json();
    });
    console.log(sourceFootballData);
    const {matches} =  yield sourceFootballData;
    console.log(matches);
    // yield const matchdata = matches.map(match => ConvertFdApiDataToFixtures(match))
    const matchdata = yield ConvertFdApiDataToFixtures(matches)
    console.log(matchdata);
    yield put(fetchMatchdaySuccess(matchdata));
  } catch (error) {
    yield put(fetchMatchdayFailure(error));
  }
}
