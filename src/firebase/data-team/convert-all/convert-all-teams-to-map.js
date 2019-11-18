

const convertAllTeamsSnapshotToMap = (teams) => {
    const transformedTeams = teams.docs.map(doc => {
      const {team_name, team_short, logo, author, createdAt} = doc.data();
      return {
        id: doc.id,
        team_name,
        team_short,
        logo,
        author,
        createdAt
      };
    });
    return transformedTeams;
    // console.log(transformedTeams);
    // return transformedTeams.reduce((accumulator, team,index) =>{
    //   accumulator[team.team_name] = team;
    //   return accumulator;
    // }, {})
  }
export default convertAllTeamsSnapshotToMap;