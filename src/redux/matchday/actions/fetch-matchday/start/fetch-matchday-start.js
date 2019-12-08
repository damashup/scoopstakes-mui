import MatchdayActionTypes from "../../../types/matchday.types";

const fetchMatchdayStart = date => ({
  type: MatchdayActionTypes.FETCH_MATCHDAY_START,
  payload: date
});

export default fetchMatchdayStart;
