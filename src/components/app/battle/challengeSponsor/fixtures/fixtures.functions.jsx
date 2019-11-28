export class game {
    constructor(id,homeTeam,awayTeam,htScore,atScore,playerHtGuess,playerAtGuess,playerGamePoints, 
                opponentHtGuess,opponentAtGuess,opponentGamePoints){
                    this.id = id;
                    this.homeTeam = homeTeam; 
                    this.awayTeam = awayTeam;
                    this.htScore = htScore;
                    this.atScore = atScore; 
                    this.playerHtGuess = playerHtGuess;
                    this.playerAtGuess = playerAtGuess;
                    this.playerGamePoints = playerGamePoints; 
                    this.opponentHtGuess = opponentHtGuess;
                    this.opponentAtGuess = opponentAtGuess;
                    this.opponentGamePoints = opponentGamePoints;          
    }
}

export class teamStats {
    constructor(id,team,score,playerGuess,opponentGuess){
                    this.id = id;
                    this.team = team; 
                    this.score = score;
                    this.playerGuess = playerGuess;
                    this.opponentGuess = opponentGuess;        
    }
}

export const convertTeamDataToGames = (teamData, playerResult, opponentResult) => {
    const teamDataLength = teamData.length;
    const games_list=[]
    let x = 1;
    let gameId = 1;
    while (x < (teamDataLength + 1)){
        const homeTeam = teamData[x-1].team
        const awayTeam = teamData[x].team
        const htScore = teamData[x-1].score[0];
        const atScore = teamData[x].score[0]; 
        const playerHtGuess = teamData[x-1].playerGuess[0];
        const playerAtGuess = teamData[x].playerGuess[0];
        const playerGamePoints = playerResult.points_list[gameId-1]; 
        const opponentHtGuess = teamData[x-1].opponentGuess[0];
        const opponentAtGuess = teamData[x].opponentGuess[0];
        const opponentGamePoints = opponentResult.points_list[gameId-1];    
        const gameRef = new game(gameId,homeTeam,awayTeam,htScore,atScore,
                                playerHtGuess,playerAtGuess,playerGamePoints,
                                opponentHtGuess,opponentAtGuess,opponentGamePoints)

        games_list.push(gameRef);
        gameId +=1
        x +=2;       
    }
    return games_list;
}