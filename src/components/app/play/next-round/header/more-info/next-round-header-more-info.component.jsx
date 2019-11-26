import React from 'react';
import List from '@material-ui/core/List';
import { Grid } from '@material-ui/core';


const NextRoundComponent = ({nextRound}) => {

  return (

        <List component="div" disablePadding>
          <Grid container direction="row">
            <Grid item xs={4}>No of Entrants: </Grid>
            <Grid item xs={4}>Prize pool: </Grid>
            <Grid item xs={4}>Deadline date: </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={4}>Open Battles: </Grid>
            <Grid item xs={4}>Your matched battles: </Grid>
            <Grid item xs={4}>Your open battles: </Grid>
          </Grid>
        </List>  

  );
}

export default NextRoundComponent;
