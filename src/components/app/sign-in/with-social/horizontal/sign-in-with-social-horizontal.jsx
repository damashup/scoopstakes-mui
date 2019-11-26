import React from 'react';
import SignInWithFacebook from '../sign-in-with-facebook/sign-in-with-facebook.component';
import SignInWithGoogle from '../sign-in-with-google/sign-in-with-google.component';
import SignInWithTwitter from '../sign-in-with-twitter/sign-in-with-twitter.component';
import SignInWithGitHub from '../sign-in-with-github/sign-in-with-github.component';
import { Grid } from '@material-ui/core';

const SignInWithSocial = () => {
    return (
        <Grid container direction='row' spacing={1}>
            <Grid item xs={6}><SignInWithGoogle /></Grid>
            <Grid item xs={6}><SignInWithTwitter /></Grid>
            <Grid item xs={6}><SignInWithGitHub /></Grid>
            <Grid item xs={6}><SignInWithFacebook /></Grid>    
        </Grid>
    )
}

export default SignInWithSocial;


