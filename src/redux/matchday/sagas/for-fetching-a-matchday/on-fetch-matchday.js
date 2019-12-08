import {takeLatest} from 'redux-saga/effects';
import MatchdayActionTypes from '../../types/matchday.types';
import {asyncFetchMatchday} from './async-fetch-matchday';

export function* onFetchMatchday(){
    yield takeLatest(MatchdayActionTypes.FETCH_MATCHDAY_START, asyncFetchMatchday);
}
