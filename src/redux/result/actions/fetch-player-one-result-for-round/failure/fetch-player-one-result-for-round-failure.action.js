import ResultActionTypes from '../../../types/result.types';

const fetchPlayerOneResultForRoundFailure = error => {
    
    return ({
        type: ResultActionTypes.FETCH_PLAYER_ONE_RESULT_FOR_ROUND_FAILURE,
        payload: error})
};


export default fetchPlayerOneResultForRoundFailure;