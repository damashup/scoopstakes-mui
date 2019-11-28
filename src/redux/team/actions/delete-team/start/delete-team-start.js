import TeamActionTypes from '../../../types/team.types';

const deleteTeamStart = teamId => ({
    type: TeamActionTypes.DELETE_TEAM_START,
    payload: teamId
});

export default  deleteTeamStart