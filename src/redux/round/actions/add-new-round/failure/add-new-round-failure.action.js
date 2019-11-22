import RoundActionTypes from '../../../types/round.types';



const addNewRoundFailure = error => {
    
    return ({
        type: RoundActionTypes.ADD_NEW_TEAM_FAILURE,
        payload: error})
};


export default addNewRoundFailure;