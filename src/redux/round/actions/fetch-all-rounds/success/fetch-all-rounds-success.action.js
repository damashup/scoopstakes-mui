import RoundActionTypes from '../../../types/round.types';

const fetchAllRoundsSuccess = rounds => ({
    type: RoundActionTypes.FETCH_ALL_ROUNDS_SUCCESS,
    payload: rounds
});

export default fetchAllRoundsSuccess