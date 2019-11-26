import React from 'react';
import { Grid } from '@material-ui/core';
import {CompetitionBox, StartTimeBox} from './styles';
import Moment from 'react-moment';

const TitleInfo = ({competition, startTime}) => {
    console.log(startTime)
    return(
    <Grid container>
        <Grid item xs={6}><Grid container justify='flex-start'>
            <CompetitionBox>{competition}</CompetitionBox>
        </Grid></Grid>
        <Grid item xs={6}><Grid container justify='flex-end'>
            <StartTimeBox><Moment format=" ddd DD MMM, HH mm">{startTime}</Moment></StartTimeBox>
        </Grid></Grid>
      </Grid>
    )}

export default TitleInfo
