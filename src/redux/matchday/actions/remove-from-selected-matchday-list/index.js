import MatchdayActionTypes from "../../types/matchday.types";

const Remove = match => ({
  type: MatchdayActionTypes.REMOVE_FROM_SELECTED_MATCHDAY_LIST,
  payload: match
});

export default Remove;