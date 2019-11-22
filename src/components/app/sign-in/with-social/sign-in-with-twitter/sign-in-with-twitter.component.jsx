import React from 'react';
import {connect} from 'react-redux';
import TwitterImage from "../../../../../assets/twitter-icon-2.png";

import {twitterSignInStart} from '../../../../../redux/user/actions/sign-in/start/with-twitter/twitter-sign-in-start.action';

import {
    TwitterIconImg,
    SignInWithTwitterDiv
    } from './sign-in-with-twitter.styles';
import {SignInText} from '../sign-in-with-social.styles';
import { Button } from '@material-ui/core';

const SignInWithTwitter =({twitterSignInStart}) => {

        return (
            <SignInWithTwitterDiv>

                <Button 
                    type='button' 
                    onClick={twitterSignInStart} 
                    // isTwitterSignIn
                    variant="outlined" 
                    color="primary"
                    fullWidth
                >
                    <TwitterIconImg src={TwitterImage} alt="Twitter logo"></TwitterIconImg>
                    <SignInText>Sign in</SignInText>
                </Button>
                
            </SignInWithTwitterDiv>
        )
}

const mapDispatchToProps = dispatch => ({
    twitterSignInStart: () => dispatch(twitterSignInStart())
});

export default connect(null, mapDispatchToProps)(SignInWithTwitter);