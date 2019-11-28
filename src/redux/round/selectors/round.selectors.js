import { createSelector } from 'reselect';

const selectRound = state => state.round;

export const selectAll = createSelector(
  [selectRound],
  round => round.rounds
);

export const selectOpenRounds = createSelector(
  [selectRound],
  round => round.openRounds
);


export const selectNextRound = createSelector(
  [selectOpenRounds],
  allOpenRounds => allOpenRounds ? allOpenRounds.find(rnd => rnd.round_status === 'open') : 'loading next round....'
)

export const selectActiveRound = createSelector(
  [selectRound],
  round => round.activeRound
)