import React from 'react'

import CustomDivider from '../../components/page-elements/divider/custom-divider/custom-divider.component';
import SignInWithSocial from '../../components/app/sign-in/with-social/sign-in-with-social';

import { Grid } from '@material-ui/core';
import SignInWithEmail from '../../components/app/sign-in/with-email';


const SignInPage = () => {
  return (
    <Grid container direction='row'>
            <Grid item xs={3}>&nbsp;</Grid>
            <Grid item xs={5}>
                <SignInWithEmail />
                <CustomDivider>or</CustomDivider>
                <SignInWithSocial />
            </Grid>
            <Grid item xs={4}>&nbsp;</Grid>
    </Grid>
  )
}

export default SignInPage;

   