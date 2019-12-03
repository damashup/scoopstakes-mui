import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import BattleCreate from './create';
import OpenBattles from './open';
import PageSubTitle from '../../page-elements/page-subtitle/page-subtitle.component';
import {CreateBattlePaper} from './styles';

const Battle = () => {
    return (
        <div>

            <Grid container spacing={2}>
                <Grid item xs={4}>
    
                    <PageSubTitle subtitle="Create a New Battle" />
                    <CreateBattlePaper elevation={8}>
                        <BattleCreate />
                    </CreateBattlePaper> 
                    
                </Grid>
                <Grid item xs={4}>
                    <PageSubTitle subtitle="Your Open Battles" />
                        <OpenBattles />
                </Grid>
                <Grid item xs={4}>
                    <PageSubTitle subtitle="Your Matched Battles" />
                    Your matched battles go here
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <PageSubTitle subtitle="All open battles" />
                    All open challenges go here
                </Grid>
                <Grid item xs={4}>
                    <PageSubTitle subtitle="All matched battles" />
                    A stream of matched battles goes here
                </Grid>
                <Grid item xs={4}>
                    <PageSubTitle subtitle="Your battle history" />
                    A stream of matched battles goes here
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Battle
