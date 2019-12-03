import React from 'react'
import WithEmail from './with-email';
import WithSocial from './with-social';
import { Grid, Button } from '@material-ui/core';
import CustomDivider from '../../../page-elements/divider/custom-divider';

import {SignInPaper, SignUpPaper} from './styles';
import Rightbar from '../rightbar/rightbar';
import PageSubTitle from '../../../page-elements/page-subtitle/page-subtitle.component';
import SignUp from '../play-signup';

const PlaySignIn = () => {

    if(window.steem_keychain) {
        // Steem Keychain extension installed...
        console.log('Keychain Extension installed')
    } else {
        // Steem Keychain extension not installed...
        console.log('Keychain Extension Not installed')
    }

    const handleSteemLogIn = (account_name, encrypted_message, key_type) => {
        window.steem_keychain.requestVerifyKey(account_name, encrypted_message, key_type, function(response) {
            console.log(response);
        });
    }
    return (
        
        <Grid container justify='center'>
            <Grid item xs={4}>
                <SignInPaper elevation={8} spacing={4}>
                    <WithEmail />
                    
                    <CustomDivider><PageSubTitle subtitle="Or" /></CustomDivider>
                    <PageSubTitle subtitle="Sign in with Social Account" />
                    <WithSocial />
                    <CustomDivider>Or</CustomDivider>
                    <Button onClick={handleSteemLogIn}>Sign In With Steem</Button>
                </SignInPaper>
            </Grid>

            <Grid item xs={1}></Grid>

            <Grid item xs={2}>
                <SignUpPaper elevation={0} spacing={2}>

                    <SignUp />

                </SignUpPaper>    
            </Grid>

            <Grid item xs={1}></Grid>
            
            <Grid item xs={4}>
                <Rightbar />
            </Grid>
            
        </Grid>
        
    )
}

export default PlaySignIn
