import {all, call} from 'redux-saga/effects';

import {onAddNewTeam} from './for-adding-new-team/on-add-new-team';
import {onDeleteTeam} from './for-deleting-team/on-delete-team';
import {onFetchAllTeams} from './for-fetching-all-teams/on-fetch-all-teams';

export function* teamSagas(){
    yield all([
        call(onAddNewTeam),
        call(onDeleteTeam),
        call(onFetchAllTeams),
    ]);
};
