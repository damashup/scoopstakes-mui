import { createSelector } from 'reselect';

const selectResult = state => state.result;

export const selectUserResultForRound = createSelector(
  [selectResult],
  result => result.userResultForRound
);

export const selectPlayerOneResultForRound = createSelector(
  [selectResult],
  result => result.playerOneRoundResult
);

export const selectPlayerTwoResultForRound = createSelector(
  [selectResult],
  result => result.playerTwoRoundResult
);
