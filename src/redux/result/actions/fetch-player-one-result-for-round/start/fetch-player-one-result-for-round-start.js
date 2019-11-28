import ResultActionTypes from '../../../types/result.types';

const fetchPlayerOneResultForRoundStart = userRoundData => ({
    type: ResultActionTypes.FETCH_PLAYER_ONE_RESULT_FOR_ROUND_START,
    payload: userRoundData
});

export default fetchPlayerOneResultForRoundStart;