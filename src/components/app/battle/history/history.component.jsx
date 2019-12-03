import React from 'react'
import { Grid } from '@material-ui/core'
import PageSubTitle from '../../../page-elements/page-subtitle/page-subtitle.component'

const HistoryBattles = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <PageSubTitle subtitle="Your Settled Battles" />
                    A list of your settled battles go here

                    If User not signed in,
                    then Sign In component goes here
                </Grid>
                <Grid item xs={6}>
                    <PageSubTitle subtitle="ALL Matched Battles" />
                    A list of all settled battles go here.
                </Grid>
            </Grid>

        </div>
    )
}

export default HistoryBattles