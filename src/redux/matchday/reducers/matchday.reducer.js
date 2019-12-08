import MatchdayActionTypes from "../types/matchday.types";

const INITIAL_STATE = {
  activeMatchday: [],
  selectedMatchday: [],
  isFetching: false,
  error: null
};

const matchdayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MatchdayActionTypes.FETCH_MATCHDAY_SUCCESS:
      return {
        ...state,
        activeMatchday: action.payload,
        isFetching: false,
        error: null
      };

    case MatchdayActionTypes.ADD_TO_SELECTED_MATCHDAY_LIST_START:
      return {
        ...state,
        selectedMatchday: [ ...state.selectedMatchday, action.payload] ,
        isFetching: false,
        error: null
      };

      case MatchdayActionTypes.REMOVE_FROM_SELECTED_MATCHDAY_LIST:
        return {
          ...state,
          selectedMatchday: state.selectedMatchday.filter(match => match.id !== action.payload.id) ,
          isFetching: false,
          error: null
        };  

    case MatchdayActionTypes.FETCH_MATCHDAY_FAILURE:
    case MatchdayActionTypes.ADD_TO_SELECTED_MATCHDAY_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};

export default matchdayReducer;
