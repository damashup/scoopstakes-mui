import React from 'react';
import PageSubTitle from '../../../page-elements/page-subtitle/page-subtitle.component';
import NewTeamInput from './add-new-team/add-team-input';
import { Grid } from '@material-ui/core';
import TeamList from './manage-existing-team';

const TeamAdmin = () => (
  <> 
    
    <Grid container direction='column' spacing={3}>
      <Grid item xs={4}>
        <PageSubTitle subtitle="Add New Team" />
        <NewTeamInput />
      </Grid>
      <Grid item xs={8}>
        <PageSubTitle subtitle="Manage Teams" />
        <TeamList />
      </Grid>
      
    </Grid>
    
  </> 
);

export default TeamAdmin;