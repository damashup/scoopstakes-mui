import React from 'react';
import {connect} from 'react-redux';

import FacebookImage from "../../../../../../assets/facebook-icon-3.png";

import {facebookSignInStart} from '../../../../../../redux/user/actions/sign-in/start/with-facebook/facebook-sign-in-start.action';

import {
    FacebookIconImg,
    SignInWithFacebookDiv,
    } from './sign-in-with-facebook.styles';
import {SignInText} from '../sign-in-with-social.styles';
import CustomButton from '../../../../../page-elements/button/custom-button';

const SignInWithFacebook =({facebookSignInStart}) => {

        return (
            <SignInWithFacebookDiv>

                <CustomButton
                    type='button' 
                    onClick={facebookSignInStart} 
                    isFacebookSignIn
                    fullWidth
                >
                    <FacebookIconImg src={FacebookImage} alt="Facebook logo"></FacebookIconImg>
                    <SignInText>Sign in</SignInText>
                </CustomButton>
                
            </SignInWithFacebookDiv>
        )
}

const mapDispatchToProps = dispatch => ({
    facebookSignInStart: () => dispatch(facebookSignInStart())
});

export default connect(null, mapDispatchToProps)(SignInWithFacebook);