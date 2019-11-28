import {put} from 'redux-saga/effects';

import {firestore} from '../../../../firebase/firebase.utils';
import deleteTeamSuccess from '../../actions/delete-team/success';
import deleteTeamFailure from '../../actions/delete-team/failure';
import {isUserAuthenticated} from '../../../user/sagas/for-checking-user-session/is-user-authenticated.saga';
import {asyncFetchAllTeams} from '../for-fetching-all-teams/async-fetch-all-teams';

export function* asyncDeleteTeam({payload: teamId}){
    try {
        const userRef = yield isUserAuthenticated();
        const newTeamRef = yield firestore.collection('teams').doc(teamId).delete()
        yield asyncFetchAllTeams();
        yield put(deleteTeamSuccess({newTeamRef, userRef}));
    } catch(error) {
        yield put(deleteTeamFailure(error));
    }   
}
