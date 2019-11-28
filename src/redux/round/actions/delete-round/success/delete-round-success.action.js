import RoundActionTypes from '../../../types/round.types';

const deleteRoundSuccess = round => ({
    type: RoundActionTypes.DELETE_ROUND_SUCCESS,
    payload: round
});

export default deleteRoundSuccess