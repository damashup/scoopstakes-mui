import {takeLatest} from 'redux-saga/effects';
import TeamActionTypes from '../../types/team.types';
import {asyncDeleteTeam} from './async-delete-team';

export function* onDeleteTeam(){
    yield takeLatest(TeamActionTypes.DELETE_TEAM_START, asyncDeleteTeam);
}
