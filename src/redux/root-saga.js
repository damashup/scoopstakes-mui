import {all, call} from 'redux-saga/effects';

import {userSagas} from './user/sagas/user.sagas';
import {teamSagas} from './team/sagas/team.sagas';

export default function* rootSaga(){
    yield all([
        call(userSagas),
        call(teamSagas)
    ])
}