import {put} from 'redux-saga/effects';

import {fetchOpenRoundsDetail, convertAllRoundsSnapshotToMap} from '../../../../firebase';
import fetchOpenRoundsSuccess from '../../actions/fetch-open-rounds/success';
import fetchOpenRoundsFailure from '../../actions/fetch-open-rounds/failure';

export function* asyncFetchOpenRounds(){
    try {
        const roundsSnapshot = yield fetchOpenRoundsDetail()
        const openRoundsMap = yield convertAllRoundsSnapshotToMap(roundsSnapshot)
        yield put(fetchOpenRoundsSuccess(openRoundsMap));
    } catch(error) {
        yield put(fetchOpenRoundsFailure(error));
    }   
}



