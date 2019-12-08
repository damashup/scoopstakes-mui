import MatchdayActionTypes from "../../../types/matchday.types";

const Failure = error => {
  return {
    type: MatchdayActionTypes.ADD_TO_SELECTED_MATCHDAY_LIST_FAILURE,
    payload: error
  };
};

export default Failure;
