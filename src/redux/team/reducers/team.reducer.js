import TeamActionTypes from '../types/team.types';

const INITIAL_STATE = {
    recentlyAddedTeam: [],
    teams: null,
    isFetching: false,
    error: null,
    providers: null
};

const teamReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case TeamActionTypes.ADD_NEW_TEAM_SUCCESS: 
            return {
                ...state,
                recentlyAddedTeam: [...state.recentlyAddedTeam, action.payload],
                isFetching: false,
                error: null
            };
        
        case TeamActionTypes.FETCH_ALL_TEAMS_SUCCESS: 
            return {
                ...state,
                teams: action.payload,
                isFetching: false,
                error: null
            };    

        case TeamActionTypes.ADD_NEW_TEAM_FAILURE:  
        case TeamActionTypes.FETCH_ALL_TEAMS_FAILURE:        
            return{
                ...state,
                error: action.payload,
                isFetching: false,
            };

        default:
            return state

    }
};

export default teamReducer;