import {takeLatest} from 'redux-saga/effects';
import DirectoryActionTypes from '../../types/directory.types';
import {asyncFetchAllDirectory} from './async-fetch-all-directory';

export function* onFetchAllDirectory(){
    yield takeLatest(DirectoryActionTypes.FETCH_ALL_DIRECTORY_START, asyncFetchAllDirectory);
}
