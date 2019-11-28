import {put} from 'redux-saga/effects';


import {firestore} from '../../../../firebase/firebase.utils';
import addNewTeamSuccess from '../../actions/add-new-team/success';
import addNewTeamFailure from '../../actions/add-new-team/failure';
import {isUserAuthenticated} from '../../../user/sagas/for-checking-user-session/is-user-authenticated.saga';
import {asyncFetchAllTeams} from '../for-fetching-all-teams/async-fetch-all-teams';

export function* asyncAddNewTeam({payload: team}){
    try {
        const userRef = yield isUserAuthenticated();
        const newTeamRef = yield firestore.collection('teams').add({
            ...team,
            author: userRef.displayName,
            authorEmail: userRef.email,
            authorId: userRef.uid,
            createdAt: new Date()
        })
        console.log(newTeamRef.doc);
        yield asyncFetchAllTeams();
        yield put(addNewTeamSuccess(newTeamRef));
    } catch(error) {
        yield put(addNewTeamFailure(error));
    }   
}
