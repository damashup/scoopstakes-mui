import {takeLatest} from 'redux-saga/effects';
import RoundActionTypes from '../../types/round.types';
import {asyncFetchAllRounds} from './async-fetch-all-rounds';

export function* onFetchAllRounds(){
    yield takeLatest(RoundActionTypes.FETCH_ALL_ROUNDS_START, asyncFetchAllRounds);
}
