import TeamActionTypes from '../../../types/team.types';



const deleteTeamFailure = error => {
    
    return ({
        type: TeamActionTypes.DELETE_TEAM_FAILURE,
        payload: error})
};


export default deleteTeamFailure;