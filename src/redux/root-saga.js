import {all, call} from 'redux-saga/effects';

import {userSagas} from './user/sagas/user.sagas';
import {teamSagas} from './team/sagas/team.sagas';
import {directorySagas} from './directory/sagas/directory.sagas';
import {roundSagas} from './round/sagas/round.sagas';

export default function* rootSaga(){
    yield all([
        call(userSagas),
        call(teamSagas),
        call(directorySagas),
        call(roundSagas),
    ])
}