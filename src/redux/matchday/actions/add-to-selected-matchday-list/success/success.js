import MatchdayActionTypes from "../../../types/matchday.types";

const Success = matchday => ({
  type: MatchdayActionTypes.ADD_TO_SELECTED_MATCHDAY_LIST_SUCCESS,
  payload: matchday
});

export default Success;
