import React from 'react';
import { useStyles } from './fixture-item.styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fixture from './components/fixture';
import Prediction from './components/prediction';

export default function FixtureItem({
  homeTeam,
  awayTeam,
  htScore,
  atScore,
  playerHtGuess,
  playerAtGuess,
  opponentHtGuess,
  opponentAtGuess,
  playerGamePoints,
  opponentGamePoints,
  player,
  opponent
}) {
  const classes = useStyles();

  return (
     <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>

            <Fixture homeTeam={homeTeam} awayTeam={awayTeam} htScore={htScore} atScore={atScore} />

            <Prediction 
                htGuess={playerHtGuess}
                atGuess={playerAtGuess}
                gamePoints={playerGamePoints}
                vsPoints={opponentGamePoints}
                protagonist={player}
            />

            <Prediction 
                htGuess={opponentHtGuess}
                atGuess={opponentAtGuess}
                gamePoints={opponentGamePoints}
                vsPoints={playerGamePoints}
                protagonist={opponent}
            />
        </Paper>
    </Grid>
  );
}
