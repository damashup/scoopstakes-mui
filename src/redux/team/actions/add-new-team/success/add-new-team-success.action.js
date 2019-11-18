import TeamActionTypes from '../../../types/team.types';

const addNewTeamSuccess = team => ({
    type: TeamActionTypes.ADD_NEW_TEAM_SUCCESS,
    payload: team
});

export default addNewTeamSuccess