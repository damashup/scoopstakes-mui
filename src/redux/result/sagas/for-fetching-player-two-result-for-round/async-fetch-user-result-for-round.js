import {put} from 'redux-saga/effects';

import {fetchUserResultForRound, convertResultsSnapshotToMap} from '../../../../firebase';
import fetchPlayerTwoResultForRoundSuccess from '../../actions/fetch-player-two-result-for-round/success';
import fetchPlayerTwoResultForRoundFailure from '../../actions/fetch-player-two-result-for-round/failure';

export function* asyncFetchUserResultForRound({payload: {playerTwo, roundId}}){
    try {
        const resultsSnapshot = yield fetchUserResultForRound(playerTwo, roundId)
        const openResultsMap = yield convertResultsSnapshotToMap(resultsSnapshot)
        yield put(fetchPlayerTwoResultForRoundSuccess(openResultsMap));
    } catch(error) {
        yield put(fetchPlayerTwoResultForRoundFailure(error));
    }   
}



