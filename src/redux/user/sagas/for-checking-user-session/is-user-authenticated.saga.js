import {takeLatest, put} from 'redux-saga/effects';

import UserActionTypes from '../../types/user.types';

import {signInFailure} from '../../actions/sign-in/failure/sign-in-failure.action';
import {fetchCurrentUser} from '../../../../firebase';

import {asyncFetchSnapshotFromUserAuth} from '../helper/async-fetch-snapshot-from-user';

export function* isUserAuthenticated(){
    try {
        const userAuth = yield fetchCurrentUser();
        if(!userAuth) return;
        yield asyncFetchSnapshotFromUserAuth(userAuth);  
        return userAuth;
    } catch(error) {
        yield put(signInFailure(error));
    }
     
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}