import React from 'react';
import PageSubTitle from '../../../page-elements/page-subtitle/page-subtitle.component';
import AddNewTeam from './add-new-team';
import { Grid } from '@material-ui/core';

const TeamAdmin = () => (
  <> 
    
    <Grid container direction='column' spacing={2}>
      <Grid item xs={12}>
        <AddNewTeam />
      </Grid>
      <Grid item xs={12}>
        <PageSubTitle subtitle="Recently added" />
      </Grid>
      
    </Grid>
    
  </> 
);

export default TeamAdmin;