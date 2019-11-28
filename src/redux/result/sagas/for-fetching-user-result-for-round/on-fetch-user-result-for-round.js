import {takeLatest} from 'redux-saga/effects';
import ResultActionTypes from '../../types/result.types';
import {asyncFetchUserResultForRound} from './async-fetch-user-result-for-round';

export function* onFetchUserResultForRound(){
    yield takeLatest(ResultActionTypes.FETCH_USER_RESULT_FOR_ROUND_START, asyncFetchUserResultForRound);
}
