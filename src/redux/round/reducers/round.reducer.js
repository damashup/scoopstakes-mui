import RoundActionTypes from '../types/round.types';

const INITIAL_STATE = {
    recentlyAddedRound: [{actual_first_goal: 0,
        deadline_time: "2019-04-20 12:30:00",
        first_ko_time: "2019-04-20 12:30:00",
        id: "I840RXeD7mTfPEB4mZok",
        round_no: 69,
        round_permalink: "football-5-rnd-69-enter-now-join-and-win-steem-dollars-100-steem-dollars-jackpot",
        round_status: "open",
        sbd_jackpot_amount: 100,
        sbd_rewards_pot: 0,
        scores: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        season: "1819",
        teams: (10) ["Manchester City", "Tottenham", "Huddersfield Town", "Watford", "West Ham", "Leicester City", "Wolves", "Brighton", "Newcastle", "Southampton"],
        uid: "1819-69"}],
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