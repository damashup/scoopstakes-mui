import TeamActionTypes from '../../../types/team.types';

const addNewTeamStart = team => ({
    type: TeamActionTypes.ADD_NEW_TEAM_START,
    payload: team
});

export default  addNewTeamStart