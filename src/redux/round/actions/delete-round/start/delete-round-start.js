import RoundActionTypes from '../../../types/round.types';

const deleteRoundStart = roundId => ({
    type: RoundActionTypes.DELETE_ROUND_START,
    payload: roundId
});

export default  deleteRoundStart