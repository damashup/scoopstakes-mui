import {all, call} from 'redux-saga/effects';

import {onAddNewRound} from './for-adding-new-round/on-add-new-round';
import {onFetchAllRounds} from './for-fetching-all-rounds/on-fetch-all-rounds';
import {onFetchOpenRounds} from './for-fetching-open-rounds/on-fetch-open-rounds';
import {onFetchSingleRound} from './for-fetching-a-single-round/on-fetch-single-round';

export function* roundSagas(){
    yield all([
        call(onAddNewRound),
        call(onFetchAllRounds),
        call(onFetchOpenRounds),
        call(onFetchSingleRound),
    ]);
};
