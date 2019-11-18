import TeamActionTypes from '../../../types/team.types';

const fetchAllTeamsFailure = error => {
    
    return ({
        type: TeamActionTypes.FETCH_ALL_TEAMS_FAILURE,
        payload: error})
};


export default fetchAllTeamsFailure;