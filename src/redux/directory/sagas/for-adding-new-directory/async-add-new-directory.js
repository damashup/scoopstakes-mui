import {put} from 'redux-saga/effects';


import {firestore} from '../../../../firebase/firebase.utils';
import addNewDirectorySuccess from '../../actions/add-new-directory/success';
import addNewDirectoryFailure from '../../actions/add-new-directory/failure';
import {isUserAuthenticated} from '../../../user/sagas/for-checking-user-session/is-user-authenticated.saga';

export function* asyncAddNewDirectory({payload: directory}){
    try {
        const userRef = yield isUserAuthenticated();
        const newDirectoryRef = yield firestore.collection('directory').add({
            ...directory,
            author: userRef.displayName,
            authorEmail: userRef.email,
            createdAt: new Date()
            // TODO add authorId..

        })
        yield put(addNewDirectorySuccess(newDirectoryRef));
    } catch(error) {
        yield put(addNewDirectoryFailure(error));
    }   
}
