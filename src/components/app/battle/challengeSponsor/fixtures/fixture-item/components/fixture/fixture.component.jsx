import React from 'react';
import { useStyles, TeamBox } from './fixture.styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
// import TeamLogoContainer from '../../../../../../team/team-logo/team-logo.container';

export default function Fixture({homeTeam,awayTeam,htScore,atScore}){
  const classes = useStyles();
  return (  
    <Grid container className={`${classes.root}`} spacing={2}>
        {/* <Grid item xs={2}><TeamLogoContainer team={homeTeam} avatar/></Grid> */}
        <Grid item xs={3}><Paper className={classes.paperRight} elevation={0}><TeamBox fontWeight="fontWeightBold">{homeTeam}</TeamBox></Paper></Grid>
        <Grid item xs={2}>                   
            <Paper className={classes.paperRes} elevation={1}>
                <Grid container className={classes.root}>
                    <Grid item xs={5}>
                        <Paper className={`${classes.paperRight} ${classes.paperRes} `} elevation={0}>
                        <Box fontWeight="fontWeightBold">
                        {htScore}
                        </Box>
                        </Paper>
                    </Grid>    
                    <Grid item xs={2}><Paper className={`${classes.paperRes} `} elevation={0}>-</Paper></Grid>   
                    <Grid item xs={5}>
                        <Paper className={`${classes.paperLeft} ${classes.paperRes} `} elevation={0}>
                        <Box fontWeight="fontWeightBold">
                        {atScore}
                        </Box>
                        </Paper>
                    </Grid>   
                </Grid>
            </Paper>
        </Grid>
        <Grid item xs={3}><Paper className={classes.paperLeft} elevation={0}><TeamBox fontWeight="fontWeightBold">{awayTeam}</TeamBox></Paper></Grid>
        {/* <Grid item xs={2}><TeamLogoContainer team={awayTeam} avatar/></Grid> */}
    </Grid>
  );
}
