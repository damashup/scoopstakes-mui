import {put} from 'redux-saga/effects';

import {getAllTeamsDetail, convertAllTeamsSnapshotToMap} from '../../../../firebase';
import fetchAllTeamsSuccess from '../../actions/fetch-all-teams/success';
import fetchAllTeamsFailure from '../../actions/fetch-all-teams/failure';

export function* asyncFetchAllTeams(){
    try {
        const teamsSnapshot = yield getAllTeamsDetail()
        const allTeamsMap = yield convertAllTeamsSnapshotToMap(teamsSnapshot)
        yield put(fetchAllTeamsSuccess(allTeamsMap));
    } catch(error) {
        yield put(fetchAllTeamsFailure(error));
    }   
}



