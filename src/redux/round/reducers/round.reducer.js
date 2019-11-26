import RoundActionTypes from '../types/round.types';

const INITIAL_STATE = {
    recentlyAddedRound: [],
    rounds: null,
    openRounds: null,
    isFetching: false,
    error: null,
    providers: null
};

const roundReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case RoundActionTypes.ADD_NEW_ROUND_SUCCESS: 
            return {
                ...state,
                recentlyAddedRound: [...state.recentlyAddedRound, action.payload],
                isFetching: false,
                error: null
            };
        
        case RoundActionTypes.FETCH_ALL_ROUNDS_SUCCESS: 
            return {
                ...state,
                rounds: action.payload,
                isFetching: false,
                error: null
            };    

        case RoundActionTypes.FETCH_OPEN_ROUNDS_SUCCESS: 
            return {
                ...state,
                openRounds: action.payload,
                isFetching: false,
                error: null
            }; 

        case RoundActionTypes.ADD_NEW_ROUND_FAILURE:  
        case RoundActionTypes.FETCH_ALL_ROUNDS_FAILURE:
        case RoundActionTypes.FETCH_OPEN_ROUNDS_FAILURE:             
            return{
                ...state,
                error: action.payload,
                isFetching: false,
            };

        default:
            return state

    }
};

export default roundReducer;