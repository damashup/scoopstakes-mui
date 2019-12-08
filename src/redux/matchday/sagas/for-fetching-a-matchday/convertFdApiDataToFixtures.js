import React from 'react'

const ConvertFdApiDataToFixtures = (matches) => {
const matchesArrayLength = matches.length;
console.log(matchesArrayLength)
  const resultsList = [];
  let x = 1;
  while (x < matchesArrayLength + 1) {
    const { id, homeTeam, awayTeam, status, competition, utcDate } = matches[
      x - 1
    ];
    const resultRef = {
      id,
      homeTeam,
      awayTeam,
      homeTeamScore: matches[x - 1].score.fullTime.homeTeam,
      awayTeamScore: matches[x - 1].score.fullTime.awayTeam,
      status,
      competition,
      koTime: utcDate
    };
    resultsList.push(resultRef);
    x += 1;
  }
  return resultsList;
}

export default ConvertFdApiDataToFixtures
