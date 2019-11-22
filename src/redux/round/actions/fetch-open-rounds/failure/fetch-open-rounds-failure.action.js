import RoundActionTypes from '../../../types/round.types';

const fetchOpenRoundsFailure = error => {
    
    return ({
        type: RoundActionTypes.FETCH_OPEN_ROUNDS_FAILURE,
        payload: error})
};


export default fetchOpenRoundsFailure;