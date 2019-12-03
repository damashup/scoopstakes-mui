import {put} from 'redux-saga/effects';


import {firestore} from '../../../../firebase/firebase.utils';
import addNewRoundSuccess from '../../actions/add-new-round/success';
import addNewRoundFailure from '../../actions/add-new-round/failure';
import {isUserAuthenticated} from '../../../user/sagas/for-checking-user-session/is-user-authenticated.saga';

export function* asyncAddNewRound({payload: round}){
    console.log(round)
    try {
        const userRef = yield isUserAuthenticated();
        const newRoundRef = yield firestore.collection('rounds').add({
            ...round,
            author: userRef.displayName,
            authorEmail: userRef.email,
            createdAt: new Date()
            // TODO add authorId..

        })
        
        yield put(addNewRoundSuccess(newRoundRef));
    } catch(error) {
        yield put(addNewRoundFailure(error));
    }   
}
