import {put} from 'redux-saga/effects';

import {fetchUserResultForRound, convertResultsSnapshotToMap} from '../../../../firebase';
import fetchUserResultForRoundSuccess from '../../actions/fetch-user-result-for-round/success';
import fetchUserResultForRoundFailure from '../../actions/fetch-user-result-for-round/failure';

export function* asyncFetchUserResultForRound(){
    try {
        const resultsSnapshot = yield fetchUserResultForRound()
        const openResultsMap = yield convertResultsSnapshotToMap(resultsSnapshot)
        yield put(fetchUserResultForRoundSuccess(openResultsMap));
    } catch(error) {
        yield put(fetchUserResultForRoundFailure(error));
    }   
}



