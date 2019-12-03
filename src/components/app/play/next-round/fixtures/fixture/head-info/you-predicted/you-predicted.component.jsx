import React from 'react';
import {connect} from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import {YouGrid} from './styles';
import YourScoreBox from './scorebox';
import { selectCurrentUser } from '../../../../../../../../redux/user/selectors/user.selectors';
import { createStructuredSelector } from 'reselect';


const FinalScore = ({currentUser}) => {
    const homeTeamScorePrediction = 2;
    const awayTeamScorePrediction = 1;
    return (
    <>  
        <YouGrid container justify='center'>
            You predict
        </YouGrid>

        <Grid 
        container 
        direction='row' 
        justify='center' 
        alignItems='center' 
        spacing={1}
        >
            {currentUser
            ?
            <>
                <Grid item xs={4}><YourScoreBox score={homeTeamScorePrediction} /></Grid>
                <Grid item xs={4}><Grid container justify='center'>v</Grid></Grid>
                <Grid item xs={4}><YourScoreBox score={awayTeamScorePrediction} /></Grid>
            </>
            :
            <>
                <Button variant='outlined' fullWidth>Login to play</Button>
            </>
            }
            
        </Grid>
    </>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(FinalScore);
