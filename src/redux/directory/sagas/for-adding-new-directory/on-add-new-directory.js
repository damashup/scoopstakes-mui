import {takeLatest} from 'redux-saga/effects';
import DirectoryActionTypes from '../../types/directory.types';
import {asyncAddNewDirectory} from './async-add-new-directory';

export function* onAddNewDirectory(){
    yield takeLatest(DirectoryActionTypes.ADD_NEW_DIRECTORY_START, asyncAddNewDirectory);
}
