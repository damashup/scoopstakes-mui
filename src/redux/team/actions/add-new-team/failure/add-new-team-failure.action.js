import TeamActionTypes from '../../../types/team.types';



const addNewTeamFailure = error => {
    
    return ({
        type: TeamActionTypes.ADD_NEW_TEAM_FAILURE,
        payload: error})
};


export default addNewTeamFailure;