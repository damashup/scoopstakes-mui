import React from 'react'
import Grid from '@material-ui/core/Grid';
import {TypographyHeader} from './fixtures.styles';
import NanzoFixtureItem from './fixture-item';
import {teamStats, convertTeamDataToGames} from './fixtures.functions';

const NanzoFixtures = ({teams, scores, opponentResult, playerResult, player, opponent }) => {
    console.log(playerResult);
    const teamData = teams.map((team,index) => {
        const teamIndex = index;
        const teamScore = scores.filter((score,index) => index === teamIndex);
        const playerGuess = playerResult.game_predictions.filter((score,index) => index === teamIndex);
        const opponentGuess = opponentResult.game_predictions.filter((score,index) => index === teamIndex);
        const stats = new teamStats(teamIndex, team,teamScore, playerGuess, opponentGuess)
        return stats
    });

    const gameslist = convertTeamDataToGames(teamData, playerResult, opponentResult);
    

    return (
       <div>
            <TypographyHeader variant="h6" component="h2">Fixtures</TypographyHeader>
            <Grid container spacing={2}>            
            {gameslist.map(game => (

                        <NanzoFixtureItem 
                            homeTeam={game.homeTeam}
                            awayTeam={game.awayTeam}
                            htScore={game.htScore}
                            atScore={game.atScore}
                            playerHtGuess={game.playerHtGuess}
                            playerAtGuess={game.playerAtGuess}
                            opponentHtGuess={game.opponentHtGuess}
                            opponentAtGuess={game.opponentAtGuess}
                            playerGamePoints={game.playerGamePoints}
                            opponentGamePoints ={game.opponentGamePoints}
                            key={game.id}
                            player={player}
                            opponent={opponent}
                        /> 
                            
            ))}
            </Grid>
       </div>            
    )
}

export default NanzoFixtures;