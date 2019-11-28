import TeamActionTypes from '../../../types/team.types';

const deleteTeamSuccess = team => ({
    type: TeamActionTypes.DELETE_TEAM_SUCCESS,
    payload: team
});

export default deleteTeamSuccess