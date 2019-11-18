import {all, call} from 'redux-saga/effects';

import {onAddNewDirectory} from './for-adding-new-directory/on-add-new-directory';
import {onFetchAllDirectory} from './for-fetching-all-directory/on-fetch-all-directory';

export function* directorySagas(){
    yield all([
        call(onAddNewDirectory),
        call(onFetchAllDirectory),
    ]);
};
