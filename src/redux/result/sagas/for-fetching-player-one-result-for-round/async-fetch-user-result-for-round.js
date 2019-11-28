import {put} from 'redux-saga/effects';

import {fetchUserResultForRound, convertResultsSnapshotToMap} from '../../../../firebase';
import fetchPlayerOneResultForRoundSuccess from '../../actions/fetch-player-one-result-for-round/success';
import fetchPlayerOneResultForRoundFailure from '../../actions/fetch-player-one-result-for-round/failure';

export function* asyncFetchUserResultForRound({payload: {playerOne, roundId}}){
    try {
        const resultsSnapshot = yield fetchUserResultForRound(playerOne, roundId)
        const openResultsMap = yield convertResultsSnapshotToMap(resultsSnapshot)
        yield put(fetchPlayerOneResultForRoundSuccess(openResultsMap));
    } catch(error) {
        yield put(fetchPlayerOneResultForRoundFailure(error));
    }   
}



