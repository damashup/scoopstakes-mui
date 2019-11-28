import React from 'react';
import {connect} from 'react-redux';
import { useStyles } from './prediction.styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../../../../../../redux/user/selectors/user.selectors';

const Prediction = ({
  htGuess,
  atGuess,
  gamePoints,
  vsGamePoints,
  protagonist,
  currentUser
}) => {

  const classes = useStyles();

  let challengeResult;
  if(gamePoints > vsGamePoints){
      challengeResult = 'win'
  }

  return (
    <Grid container className={classes.root} spacing={2}>
        <Grid item xs={5}><Paper className={classes.paperRight} elevation={0}>{protagonist === currentUser.steemUsername ? `Your prediction` : protagonist}</Paper></Grid>
        <Grid item xs={2}>
                <Grid container className={classes.root}>
                    <Grid item xs={4}><Paper elevation={1}>{htGuess}</Paper></Grid>    
                    <Grid item xs={4}>-</Grid>   
                    <Grid item xs={4}><Paper elevation={1}>{atGuess}</Paper></Grid>   
                </Grid>
        </Grid>
        <Grid item xs={5}>
            <Paper className={`${classes.paperLeft} ${challengeResult === 'win' ? classes.winColor : ''}`} elevation={0}>
                {gamePoints} pts
            </Paper>
        </Grid>
    </Grid>           
  );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Prediction);
