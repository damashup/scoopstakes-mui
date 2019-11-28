import {put} from 'redux-saga/effects';

import {fetchSingleRound, convertAllRoundsSnapshotToMap} from '../../../../firebase';
import fetchSingleRoundSuccess from '../../actions/fetch-single-round/success';
import fetchSingleRoundFailure from '../../actions/fetch-single-round/failure';

export function* asyncFetchSingleRound({payload}){
    try {
        const roundSnapshot = yield fetchSingleRound(payload)
        console.log(roundSnapshot);
        const openRoundsMap = yield convertAllRoundsSnapshotToMap(roundSnapshot)
        yield put(fetchSingleRoundSuccess(openRoundsMap));
    } catch(error) {
        yield put(fetchSingleRoundFailure(error));
    }   
}



