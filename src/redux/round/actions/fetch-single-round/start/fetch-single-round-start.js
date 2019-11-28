import RoundActionTypes from '../../../types/round.types';

const fetchSingleRoundStart = roundId => ({
    type: RoundActionTypes.FETCH_SINGLE_ROUND_START,
    payload: roundId
});

export default fetchSingleRoundStart;