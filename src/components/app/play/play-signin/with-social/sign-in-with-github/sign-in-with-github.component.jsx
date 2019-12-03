import React from 'react';
import {connect} from 'react-redux';

import GitHubImage from "../../../../../../assets/github-icon.png";

import {githubSignInStart} from '../../../../../../redux/user/actions/sign-in/start/with-github/github-sign-in-start.action';

import {
    GitHubIconImg,
    SignInWithGitHubDiv
    } from './sign-in-with-github.styles';
import {SignInText} from '../sign-in-with-social.styles';
import CustomButton from '../../../../../page-elements/button/custom-button';

const SignInWithGitHub =({githubSignInStart}) => {

        return (
            <SignInWithGitHubDiv>

                <CustomButton 
                    type='button' 
                    onClick={githubSignInStart} 
                    isGitHubSignIn
                    fullWidth
                >
                    <GitHubIconImg src={GitHubImage} alt="Github logo"></GitHubIconImg>
                    <SignInText>Sign in</SignInText>
                </CustomButton>
                
            </SignInWithGitHubDiv>
        )
}

const mapDispatchToProps = dispatch => ({
    githubSignInStart: () => dispatch(githubSignInStart())
});

export default connect(null, mapDispatchToProps)(SignInWithGitHub);