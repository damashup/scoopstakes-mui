import React from 'react';
import {connect} from 'react-redux';

import GitHubImage from "../../../../../assets/github-icon.png";

import {githubSignInStart} from '../../../../../redux/user/actions/sign-in/start/with-github/github-sign-in-start.action';

import {
    GitHubIconImg,
    SignInWithGitHubDiv
    } from './sign-in-with-github.styles';
import { Button } from '@material-ui/core';
import {SignInText} from '../sign-in-with-social.styles';

const SignInWithGitHub =({githubSignInStart}) => {

        return (
            <SignInWithGitHubDiv>

                <Button 
                    type='button' 
                    onClick={githubSignInStart} 
                    // isGitHubSignIn
                    variant="outlined" 
                    color="primary"
                    fullWidth
                >
                    <GitHubIconImg src={GitHubImage} alt="Github logo"></GitHubIconImg>
                    <SignInText>Sign in</SignInText>
                </Button>
                
            </SignInWithGitHubDiv>
        )
}

const mapDispatchToProps = dispatch => ({
    githubSignInStart: () => dispatch(githubSignInStart())
});

export default connect(null, mapDispatchToProps)(SignInWithGitHub);