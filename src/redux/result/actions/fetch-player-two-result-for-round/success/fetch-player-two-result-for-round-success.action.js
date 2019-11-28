import ResultActionTypes from '../../../types/result.types';

const fetchPlayerTwoResultForRoundSuccess = results => ({
    type: ResultActionTypes.FETCH_PLAYER_TWO_RESULT_FOR_ROUND_SUCCESS,
    payload: results
});

export default fetchPlayerTwoResultForRoundSuccess;