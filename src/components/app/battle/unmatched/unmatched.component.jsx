import React from 'react'
import { Grid } from '@material-ui/core'
import PageSubTitle from '../../../page-elements/page-subtitle/page-subtitle.component'

const UnMatchedBattles = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <PageSubTitle subtitle="Your UnMatched Battles" />
                    Your Unmatched battles for LIVE rounds go here

                    If User not signed in,
                    then Sign In component goes here

                    If round not started, a different splash will go here

                </Grid>
                <Grid item xs={6}>
                    <PageSubTitle subtitle="ALL Matched Battles" />
                    A list of all unmatched battles for LIVE rounds goes here

                    If round not started, a different splash will go here
                </Grid>
            </Grid>

        </div>
    )
}

export default UnMatchedBattles