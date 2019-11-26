import React from 'react';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import HowToStep from './step';
import {HowToPaper, HowToTitleTypography} from './styles';

const HowToPlay = ({stepItems}) => {
    console.log(stepItems)
    return (
        <HowToPaper elevation={4}>

            <Grid container justify='center'>
                <HowToTitleTypography
                component="h2"
                variant="h3"
                color="textPrimary"
                >
                How To Play
                </HowToTitleTypography>
            </Grid>

            <Grid container >
                {stepItems.map(step => (
                    <HowToStep key={step.id} step={step} />
                ))} 
            </Grid> 
            {/* <Grid container spacing={4}>
                <Grid item xs={6}><Button fullWidth>Sign Up Now!</Button></Grid>
                <Grid item xs={6}><Button fullWidth>Login</Button></Grid>
            </Grid> */}
        </HowToPaper>
    )
}

export default HowToPlay;
