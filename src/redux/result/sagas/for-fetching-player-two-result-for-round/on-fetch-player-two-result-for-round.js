import {takeLatest} from 'redux-saga/effects';
import ResultActionTypes from '../../types/result.types';
import {asyncFetchUserResultForRound} from './async-fetch-user-result-for-round';

export function* onFetchPlayerTwoResultForRound(){
    yield takeLatest(ResultActionTypes.FETCH_PLAYER_TWO_RESULT_FOR_ROUND_START, asyncFetchUserResultForRound);
}
