import {takeLatest} from 'redux-saga/effects';
import RoundActionTypes from '../../types/round.types';
import {asyncFetchSingleRound} from './async-fetch-single-round';

export function* onFetchSingleRound(){
    yield takeLatest(RoundActionTypes.FETCH_SINGLE_ROUND_START, asyncFetchSingleRound);
}
