import { createSelector } from "reselect";

const selectMatchday = state => state.matchday;

export const selectActiveMatchday = createSelector(
  [selectMatchday],
  matchday => matchday.activeMatchday
);

export const selectSelectedMatches = createSelector(
  [selectMatchday],
  matchday => matchday.selectedMatchday
);
