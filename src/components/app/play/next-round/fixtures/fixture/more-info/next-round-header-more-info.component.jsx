import React from 'react';
import { Grid } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CustomDivider from '../../../../../../page-elements/divider/custom-divider';
import TitleInfo from '../title-info';


const FixtureMoreInfo = ({result}) => ( 
      <>
      
        <Grid container direction='row' justify='center'> 
          <CustomDivider />
            <TitleInfo competition={result.defaultCompetition} startTime={result.defaultKoTime}/>
            <Grid item xs={12}>
              <Grid container direction='column'>
                
                <EqualizerIcon/> 
                <div>Stats</div>
              </Grid>
            </Grid>
          </Grid>
          <CustomDivider />

      </>
  );


export default FixtureMoreInfo;
