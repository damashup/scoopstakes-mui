import ResultActionTypes from '../../../types/result.types';

const fetchPlayerTwoResultForRoundStart = userRoundData => ({
    type: ResultActionTypes.FETCH_PLAYER_TWO_RESULT_FOR_ROUND_START,
    payload: userRoundData
});

export default fetchPlayerTwoResultForRoundStart;