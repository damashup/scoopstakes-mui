import React from 'react';
import { Grid } from '@material-ui/core';
import {FixturesListHeaderItem, FinalScoreGrid} from './styles';


const FinalScore = ({homeTeamScore, awayTeamScore}) => {
    return (
    <>  
        <FinalScoreGrid container justify='center'>
            Final Score
        </FinalScoreGrid>

        <Grid 
        container 
        direction='row' 
        justify='center' 
        alignItems='center' 
        spacing={1}
        >
            <FixturesListHeaderItem>{homeTeamScore}</FixturesListHeaderItem>  
            <FixturesListHeaderItem>v</FixturesListHeaderItem>
            <FixturesListHeaderItem>{awayTeamScore}</FixturesListHeaderItem>

        </Grid>
    </>
    )
}

export default FinalScore
