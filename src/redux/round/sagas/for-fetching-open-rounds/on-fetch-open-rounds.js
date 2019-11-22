import {takeLatest} from 'redux-saga/effects';
import RoundActionTypes from '../../types/round.types';
import {asyncFetchOpenRounds} from './async-fetch-open-rounds';

export function* onFetchOpenRounds(){
    yield takeLatest(RoundActionTypes.FETCH_OPEN_ROUNDS_START, asyncFetchOpenRounds);
}
