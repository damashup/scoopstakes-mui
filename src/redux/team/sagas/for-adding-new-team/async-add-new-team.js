import {put} from 'redux-saga/effects';


import {firestore} from '../../../../firebase/firebase.utils';
import addNewTeamSuccess from '../../actions/addNewTeam/success';
import addNewTeamFailure from '../../actions/addNewTeam/failure';
import {isUserAuthenticated} from '../../../user/sagas/for-checking-user-session/is-user-authenticated.saga';

export function* asyncAddNewTeam({payload: team}){
    try {
        const userRef = yield isUserAuthenticated();
        const newTeamRef = yield firestore.collection('teams').add({
            ...team,
            author: userRef.displayName,
            authorEmail: userRef.email,
            createdAt: new Date()
            // TODO add authorId..

        })
        yield put(addNewTeamSuccess(newTeamRef));
    } catch(error) {
        yield put(addNewTeamFailure(error));
    }   
}
