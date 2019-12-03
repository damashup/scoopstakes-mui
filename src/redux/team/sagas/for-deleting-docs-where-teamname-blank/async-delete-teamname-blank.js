import {put} from 'redux-saga/effects';

import {firestore} from '../../../../firebase/firebase.utils';
import deleteTeamSuccess from '../../actions/delete-team/success';
import deleteTeamFailure from '../../actions/delete-team/failure';
import {isUserAuthenticated} from '../../../user/sagas/for-checking-user-session/is-user-authenticated.saga';
import {asyncFetchAllTeams} from '../for-fetching-all-teams/async-fetch-all-teams';

export function* asyncDeleteTeam({payload: teamId}){
    try {
        const userRef = yield isUserAuthenticated();
        // this logic works on author variable e.g see commented out code below. Need to get this working for team_name blank
        // Also need to identify source of the rouge doc creation
        // const newTeamRef = yield firestore.collection('teams').where("author", "==", "nanzo scoop").limit(200).get().then(function(querySnapshot) {
        const newTeamRef = yield firestore.collection('teams').where("team_name", "==", "").limit(200).get().then(function(querySnapshot) {    
            var batch = firestore.batch();
            querySnapshot.forEach(function(doc) {
                batch.delete(doc.ref);
            });
            return batch.commit();
      }).then(function() {
          console.log('delete complete')
      });
        yield asyncFetchAllTeams();
        yield put(deleteTeamSuccess({newTeamRef, userRef}));
    } catch(error) {
        yield put(deleteTeamFailure(error));
    }   
}
