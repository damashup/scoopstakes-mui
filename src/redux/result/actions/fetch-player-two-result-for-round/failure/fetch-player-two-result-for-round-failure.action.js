import ResultActionTypes from '../../../types/result.types';

const fetchPlayerTwoResultForRoundFailure = error => {
    
    return ({
        type: ResultActionTypes.FETCH_PLAYER_TWO_RESULT_FOR_ROUND_FAILURE,
        payload: error})
};


export default fetchPlayerTwoResultForRoundFailure;