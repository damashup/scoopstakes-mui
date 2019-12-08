import MatchdayActionTypes from "../../../types/matchday.types";

const Start = match => ({
  type: MatchdayActionTypes.ADD_TO_SELECTED_MATCHDAY_LIST_START,
  payload: match
});

export default Start;
