import ResultActionTypes from '../types/result.types';

const INITIAL_STATE = {
    userResultForRound: null,
    playerOneRoundResult: null,
    playerTwoRoundResult: null,
    isFetching: false,
    error: null,

};

const resultReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case ResultActionTypes.FETCH_USER_RESULT_FOR_ROUND_SUCCESS: 
            return {
                ...state,
                userResultForRound: action.payload,
                playerOneRoundResult: action.payload,
                isFetching: false,
                error: null
            };

        case ResultActionTypes.FETCH_PLAYER_ONE_RESULT_FOR_ROUND_SUCCESS: 
            return {
                ...state,
                playerOneRoundResult: action.payload,
                isFetching: false,
                error: null
            };
        case ResultActionTypes.FETCH_PLAYER_TWO_RESULT_FOR_ROUND_SUCCESS: 
            return {
                ...state,
                playerTwoRoundResult: action.payload,
                isFetching: false,
                error: null
            };

        case ResultActionTypes.FETCH_USER_RESULT_FOR_ROUND_FAILURE:             
            return{
                ...state,
                error: action.payload,
                isFetching: false,
            };

        default:
            return state

    }
};

export default resultReducer;