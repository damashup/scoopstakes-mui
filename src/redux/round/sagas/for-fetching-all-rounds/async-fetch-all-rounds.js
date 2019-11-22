import {put} from 'redux-saga/effects';

import {getAllRoundsDetail, convertAllRoundsSnapshotToMap} from '../../../../firebase';
import fetchAllRoundsSuccess from '../../actions/fetch-all-rounds/success';
import fetchAllRoundsFailure from '../../actions/fetch-all-rounds/failure';

export function* asyncFetchAllRounds(){
    try {
        const roundsSnapshot = yield getAllRoundsDetail()
        const allRoundsMap = yield convertAllRoundsSnapshotToMap(roundsSnapshot)
        yield put(fetchAllRoundsSuccess(allRoundsMap));
    } catch(error) {
        yield put(fetchAllRoundsFailure(error));
    }   
}



