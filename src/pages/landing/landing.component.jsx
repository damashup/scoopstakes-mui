import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { PageDiv } from '../../components/page-styles/base-styles';
import NextRound from '../../components/app/play/next-round';
import {LandingGrid,LandingPaper} from './landing.styles';
import HowToPlay from '../../components/app/play/how-to-play'
import { Paper } from '@material-ui/core'
import LoginWithEmailPage from '../../components/app/sign-in/with-email/horizontal';
import LoginWithSocialHorizontal from '../../components/app/sign-in/with-social/horizontal'
import CustomDivider from '../../components/page-elements/divider/custom-divider';
import CustomSplash from '../../components/page-elements/splash/custom-splash';

const LandingPage = () => {
    return (
        <PageDiv>
            <Container maxWidth="lg">
                <LandingGrid container direction='row' spacing={2}>

                    <Grid item xs={12}>
                        <Grid container alignItems='center'>
                            <Grid item xs={12}>
                                <LandingPaper elevation={4}>
                                    <Grid container justify='center'>
                                        <Grid item xs={6}>
                                        <LoginWithEmailPage />
                                        </Grid>
                                        <Grid item xs={12}><CustomDivider>Or</CustomDivider></Grid>
                                        <Grid item xs={12}>
                                        <LoginWithSocialHorizontal />
                                        </Grid>
                                    </Grid>    
                                </LandingPaper>
                            </Grid>
                            <Grid item xs={12}>
                                <CustomSplash patreon></CustomSplash>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}><NextRound /></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <HowToPlay />
                        
                    </Grid>
                </LandingGrid>
        </Container>
        </PageDiv>

    )
}

export default LandingPage;
