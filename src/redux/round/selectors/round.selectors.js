import { createSelector } from 'reselect';

const selectRound = state => state.round;

export const selectAll = createSelector(
  [selectRound],
  round => round.rounds
);

export const selectOpen = createSelector(
  [selectRound],
  round => round.openRounds
);


export const selectNextRound = createSelector(
  [selectOpen],
  allOpenRounds => allOpenRounds ? allOpenRounds.find(rnd => rnd.round_status === 'open') : 'loading next round....'
)
