import {takeLatest} from 'redux-saga/effects';
import RoundActionTypes from '../../types/round.types';
import {asyncAddNewRound} from './async-add-new-round';

export function* onAddNewRound(){
    yield takeLatest(RoundActionTypes.ADD_NEW_ROUND_START, asyncAddNewRound);
}
