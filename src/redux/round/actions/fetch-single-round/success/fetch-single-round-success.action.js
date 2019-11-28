import RoundActionTypes from '../../../types/round.types';

const fetchSingleRoundSuccess = round => ({
    type: RoundActionTypes.FETCH_SINGLE_ROUND_SUCCESS,
    payload: round
});

export default fetchSingleRoundSuccess