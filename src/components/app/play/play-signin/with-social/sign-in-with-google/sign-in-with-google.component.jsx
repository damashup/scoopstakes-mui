import React from 'react';
import {connect} from 'react-redux';
import GoogleImage from "../../../../../../assets/icon-google-50.png";

import {googleSignInStart} from '../../../../../../redux/user/actions/sign-in/start/with-google/google-sign-in-start.action';

import {
    GoogleIconImg,
    SignInWithGoogleDiv
    } from './sign-in-with-google.styles';
import {SignInText} from '../sign-in-with-social.styles';
import CustomButton from '../../../../../page-elements/button/custom-button';

const SignInWithGoogle =({googleSignInStart}) => {

        return (
            <SignInWithGoogleDiv>

                <CustomButton 
                    type='button' 
                    onClick={googleSignInStart} 
                    isGoogleSignIn
                    fullWidth
                >
                    <GoogleIconImg src={GoogleImage} alt="Google logo"></GoogleIconImg>
                    <SignInText>Sign in</SignInText>
                </CustomButton>
                
            </SignInWithGoogleDiv>
        )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignInWithGoogle);