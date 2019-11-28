import ResultActionTypes from '../../../types/result.types';

const fetchUserResultForRoundStart = userRoundData => ({
    type: ResultActionTypes.FETCH_USER_RESULT_FOR_ROUND_START,
    payload: userRoundData
});

export default fetchUserResultForRoundStart;