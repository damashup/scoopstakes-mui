import ResultActionTypes from '../../../types/result.types';

const fetchPlayerOneResultForRoundSuccess = results => ({
    type: ResultActionTypes.FETCH_PLAYER_ONE_RESULT_FOR_ROUND_SUCCESS,
    payload: results
});

export default fetchPlayerOneResultForRoundSuccess;