import TeamActionTypes from '../../../types/team.types';

const fetchAllTeamsSuccess = teams => ({
    type: TeamActionTypes.FETCH_ALL_TEAMS_SUCCESS,
    payload: teams
});

export default fetchAllTeamsSuccess