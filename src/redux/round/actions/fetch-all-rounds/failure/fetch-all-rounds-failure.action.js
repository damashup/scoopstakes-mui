import RoundActionTypes from '../../../types/round.types';

const fetchAllRoundsFailure = error => {
    
    return ({
        type: RoundActionTypes.FETCH_ALL_ROUNDS_FAILURE,
        payload: error})
};


export default fetchAllRoundsFailure;