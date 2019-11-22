import { createSelector } from 'reselect';

const selectTeam = state => state.team;

export const selectAllTeams = createSelector(
  [selectTeam],
  team => team.teams
);

export const selectTeamDetails = (teamName) => createSelector(
  [selectAllTeams],
  teams => teams.find(team => team.team_name === teamName) 
);
