import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { PageDiv } from '../../components/page-styles/base-styles';
import NextRound from '../../components/app/play/next-round';

const LandingPage = () => {
    return (
        <PageDiv>
            <Container maxWidth="lg">
                <Grid container direction='row' justify='center' spacing={6}>
                    <Grid item xs={12}>&nbsp;</Grid>
                    <Grid item xs={10}><NextRound /></Grid>

                </Grid>
        </Container>
        </PageDiv>

    )
}

export default LandingPage;
