import React from 'react'

import CustomDivider from '../../components/page-elements/divider/custom-divider/custom-divider.component';
import SignInWithSocial from '../../components/app/sign-in/with-social/sign-in-with-social';

import { Grid } from '@material-ui/core';
import SignUp from '../../components/app/sign-up';


const SignUpPage = () => {
  return (
    <Grid container direction='row'>
            
            {/* <Grid item xs={3}><PlayNowArrow /></Grid> */}
            <Grid item xs={9}>
                <SignUp />
                
                <CustomDivider>or</CustomDivider>
                <SignInWithSocial />
            </Grid>
            <Grid item xs={3}>&nbsp;</Grid>

    </Grid>
  )
}

export default SignUpPage;
