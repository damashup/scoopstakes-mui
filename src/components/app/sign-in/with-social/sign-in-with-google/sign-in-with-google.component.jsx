import React from 'react';
import {connect} from 'react-redux';
import GoogleImage from "../../../../../assets/icon-google-50.png";

import {googleSignInStart} from '../../../../../redux/user/actions/sign-in/start/with-google/google-sign-in-start.action';

import {
    GoogleIconImg,
    SignInWithGoogleDiv
    } from './sign-in-with-google.styles';
import {SignInText} from '../sign-in-with-social.styles';
import { Button } from '@material-ui/core';

const SignInWithGoogle =({googleSignInStart}) => {

        return (
            <SignInWithGoogleDiv>

                <Button 
                    type='button' 
                    onClick={googleSignInStart} 
                    // isGoogleSignIn
                    variant="outlined" 
                    color="primary"
                    fullWidth
                >
                    <GoogleIconImg src={GoogleImage} alt="Google logo"></GoogleIconImg>
                    <SignInText>Sign in</SignInText>
                </Button>
                
            </SignInWithGoogleDiv>
        )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignInWithGoogle);