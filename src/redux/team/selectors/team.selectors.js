import { createSelector } from 'reselect';

const selectTeam = state => state.team;

export const selectAllTeams = createSelector(
  [selectTeam],
  team => team.teams
);
