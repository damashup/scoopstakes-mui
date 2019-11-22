import RoundActionTypes from '../../../types/round.types';

const addNewRoundStart = round => ({
    type: RoundActionTypes.ADD_NEW_ROUND_START,
    payload: round
});

export default  addNewRoundStart