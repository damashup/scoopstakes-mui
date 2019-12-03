import React from 'react';
import PageSubTitle from '../../../page-elements/page-subtitle/page-subtitle.component';
import AddNewTeam from './add-new-team';
import { Grid, Paper } from '@material-ui/core';
import TeamList from './manage-existing-team';
import {AddTeamPaper, PageGrid} from './styles';
import DeleteDocsWithBlankTeamNames from './helper/delete-blank-teamname-button';

const TeamAdmin = () => (
  <> 
    
    <PageGrid container direction='row' spacing={2}>

      <Grid item xs={3}>
          <Grid item xs={12}>
            <PageSubTitle subtitle="Add New Teams" />
          </Grid>
          <Grid item xs={12}>
            <AddTeamPaper elevation={8}>
              <AddNewTeam />
            </AddTeamPaper>
          </Grid>
          

      </Grid>

      <Grid item xs={6}>

        <Grid item xs={12}>
          <PageSubTitle subtitle="Manage Existing Teams" />
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={8}>
            <TeamList />
          </Paper>
        </Grid>
      </Grid>  

      <Grid item xs={3}>
        <PageSubTitle subtitle="Helpers - Quick and dirty" />
        <DeleteDocsWithBlankTeamNames />
      </Grid> 

    </PageGrid>
    
  </> 
);

export default TeamAdmin;