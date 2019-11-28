import React from 'react';
import PageSubTitle from '../../../page-elements/page-subtitle/page-subtitle.component';
import AddNewRound from './add-new-round';
import { Grid, Paper } from '@material-ui/core';
import RoundList from './manage-existing-round';
import {AddRoundPaper, PageGrid} from './styles';

const RoundAdmin = () => (
  <> 
    
    <PageGrid container direction='row' spacing={2}>

      <Grid item xs={3}>
          <Grid item xs={12}>
            <PageSubTitle subtitle="Add New Round" />
          </Grid>
          <Grid item xs={12}>
            <AddRoundPaper elevation={8}>
              <AddNewRound />
            </AddRoundPaper>
          </Grid>
          

      </Grid>

      <Grid item xs={6}>

        <Grid item xs={12}>
          <PageSubTitle subtitle="Manage Open/ Scheduled Rounds" />
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={8}>
            <RoundList />
          </Paper>
        </Grid>
        
        

      </Grid>  

    </PageGrid>
    
  </> 
);

export default RoundAdmin;