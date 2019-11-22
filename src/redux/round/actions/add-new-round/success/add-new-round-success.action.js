import RoundActionTypes from '../../../types/round.types';

const addNewRoundSuccess = round => ({
    type: RoundActionTypes.ADD_NEW_ROUND_SUCCESS,
    payload: round
});

export default addNewRoundSuccess