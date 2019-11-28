import {all, call} from 'redux-saga/effects';

import {onFetchUserResultForRound} from './for-fetching-user-result-for-round/on-fetch-user-result-for-round';
import {onFetchPlayerOneResultForRound} from './for-fetching-player-one-result-for-round/on-fetch-player-one-result-for-round';
import {onFetchPlayerTwoResultForRound} from './for-fetching-player-two-result-for-round/on-fetch-player-two-result-for-round';

export function* resultSagas(){
    yield all([
        call(onFetchUserResultForRound),
        call(onFetchPlayerOneResultForRound),
        call(onFetchPlayerTwoResultForRound),
    ]);
};
