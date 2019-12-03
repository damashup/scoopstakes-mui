import React from 'react';
import NextRoundHeader from './header';
import NextRoundFixtures from './fixtures'
import ActionButton from './action-button';
import { Grid } from '@material-ui/core';
import Rightbar from '../rightbar/rightbar';

import {NextRoundDiv, NextRoundPaper} from './styles';

const NextRoundComponent = ({nextRound}) => (
    <>
      <NextRoundDiv>
        <Grid container justify='center'>
          <Grid item xs={4}>
            <NextRoundPaper elevation={4}>
              <NextRoundHeader nextRound={nextRound} />
              <ActionButton />
              <NextRoundFixtures results={nextRound.results} />
            </NextRoundPaper>
          </Grid>
          <Grid item xs={4}>
              Rounds....
          </Grid>
          <Grid item xs={4}>
              <Rightbar />
          </Grid>
            
        </Grid>
      </NextRoundDiv>    
    </>
  );

export default NextRoundComponent;
