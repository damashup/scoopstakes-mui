import RoundActionTypes from '../../../types/round.types';



const deleteRoundFailure = error => {
    
    return ({
        type: RoundActionTypes.DELETE_ROUND_FAILURE,
        payload: error})
};


export default deleteRoundFailure;