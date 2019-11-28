import ResultActionTypes from '../../../types/result.types';

const fetchUserResultForRoundSuccess = results => ({
    type: ResultActionTypes.FETCH_USER_RESULT_FOR_ROUND_SUCCESS,
    payload: results
});

export default fetchUserResultForRoundSuccess