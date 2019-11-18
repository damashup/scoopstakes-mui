import {takeLatest} from 'redux-saga/effects';
import TeamActionTypes from '../../types/team.types';
import {asyncAddNewTeam} from './async-add-new-team';

export function* onAddNewTeam(){
    yield takeLatest(TeamActionTypes.ADD_NEW_TEAM_START, asyncAddNewTeam);
}
