import React from 'react';
import Moment from 'react-moment';
import {FixturesListHeaderGrid, RoundStartTimeText} from './styles';
import { GrowDiv } from '../../../../../page-styles/base-styles';
import { Grid } from '@material-ui/core';

const HeaderInfo = ({nextRound}) => {
  // const deadline = new Date(nextRound.deadline_time);
  // const cutoffDate = deadline.getMilliseconds();
  // console.log(cutoffDate)
  // console.log(Date.now())

  return (

       <>
       <Grid container justify='space-between'>
            <FixturesListHeaderGrid item xs={6}>
              Round {nextRound.round_no}
            </FixturesListHeaderGrid>
            
            {nextRound.deadline_time > Date.now() ?
            <FixturesListHeaderGrid item xs={6}>
              In progress
            </FixturesListHeaderGrid> 
            
            :
            <FixturesListHeaderGrid item xs={6}>
              Starting:  <RoundStartTimeText><Moment fromNow>{nextRound.deadline_time}</Moment></RoundStartTimeText>
            </FixturesListHeaderGrid> 
            }
              
      </Grid>
      </>
  );
}

export default HeaderInfo;
