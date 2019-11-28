import ResultActionTypes from '../../../types/result.types';

const fetchUserResultForRoundFailure = error => {
    
    return ({
        type: ResultActionTypes.FETCH_USER_RESULT_FOR_ROUND_FAILURE,
        payload: error})
};


export default fetchUserResultForRoundFailure;