import RoundActionTypes from '../../../types/round.types';

const fetchSingleRoundFailure = error => {
    
    return ({
        type: RoundActionTypes.FETCH_SINGLE_ROUND_FAILURE,
        payload: error})
};


export default fetchSingleRoundFailure;