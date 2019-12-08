import MatchdayActionTypes from "../../../types/matchday.types";

const fetchMatchdaySuccess = matchday => ({
  type: MatchdayActionTypes.FETCH_MATCHDAY_SUCCESS,
  payload: matchday
});

export default fetchMatchdaySuccess;
