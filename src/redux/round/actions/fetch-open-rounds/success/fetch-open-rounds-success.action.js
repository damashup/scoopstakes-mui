import RoundActionTypes from '../../../types/round.types';

const fetchOpenRoundsSuccess = rounds => ({
    type: RoundActionTypes.FETCH_OPEN_ROUNDS_SUCCESS,
    payload: rounds
});

export default fetchOpenRoundsSuccess