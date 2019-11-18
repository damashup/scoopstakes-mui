import {put} from 'redux-saga/effects';

import {getAllDirectoryDetail, convertAllDirectorySnapshotToMap} from '../../../../firebase';
import fetchAllDirectorySuccess from '../../actions/fetch-all-directory/success';
import fetchAllDirectoryFailure from '../../actions/fetch-all-directory/failure';

export function* asyncFetchAllDirectory(){
    try {
        const directorySnapshot = yield getAllDirectoryDetail()
        const allDirectoryMap = yield convertAllDirectorySnapshotToMap(directorySnapshot)
        yield put(fetchAllDirectorySuccess(allDirectoryMap));
    } catch(error) {
        yield put(fetchAllDirectoryFailure(error));
    }   
}



