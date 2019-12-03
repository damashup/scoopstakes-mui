import React from 'react'
import { Grid } from '@material-ui/core'
import PageSubTitle from '../../../page-elements/page-subtitle/page-subtitle.component'

const MatchedBattles = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <PageSubTitle subtitle="Your Matched Battles" />
                    Your matched battles go here

                    If User not signed in,
                    then Sign In component goes here
                    
                </Grid>
                <Grid item xs={6}>
                    <PageSubTitle subtitle="ALL Matched Battles" />
                    A stream of all matched battles goes here
                </Grid>
            </Grid>

        </div>
    )
}

export default MatchedBattles
