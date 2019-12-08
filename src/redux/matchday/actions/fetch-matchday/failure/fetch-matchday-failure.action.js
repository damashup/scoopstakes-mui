import MatchdayActionTypes from "../../../types/matchday.types";

const fetchMatchdayFailure = error => {
  return {
    type: MatchdayActionTypes.FETCH_MATCHDAY_FAILURE,
    payload: error
  };
};

export default fetchMatchdayFailure;
