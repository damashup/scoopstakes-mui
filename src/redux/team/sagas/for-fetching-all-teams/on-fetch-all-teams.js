import {takeLatest} from 'redux-saga/effects';
import TeamActionTypes from '../../types/team.types';
import {asyncFetchAllTeams} from './async-fetch-all-teams';

export function* onFetchAllTeams(){
    yield takeLatest(TeamActionTypes.FETCH_ALL_TEAMS_START, asyncFetchAllTeams);
}
