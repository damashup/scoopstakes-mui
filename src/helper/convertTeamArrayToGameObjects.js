export class game {
    constructor(id,homeTeam,awayTeam){
                    this.id = id;
                    this.homeTeam = homeTeam; 
                    this.awayTeam = awayTeam;   
    }

    
}

export class teamStats {
    constructor(id,team){
                    this.id = id;
                    this.team = team;       
    }
}

export const convertTeamArrayToGameObjects = (teamData, playerResult, opponentResult) => {
    const teamDataLength = teamData.length;
    const games_list=[]
    let x = 1;
    let gameId = 1;
    while (x < (teamDataLength + 1)){
        const homeTeam = teamData[x-1].team
        const awayTeam = teamData[x].team   
        const gameRef = new game(gameId,homeTeam,awayTeam)
        games_list.push(gameRef);
        gameId +=1
        x +=2;       
    }
    return games_list;
}