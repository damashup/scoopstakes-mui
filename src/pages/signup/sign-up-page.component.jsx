import React from 'react'

import CustomDivider from '../../components/page-elements/divider/custom-divider/custom-divider.component';
import SignUpWithEmailAndPassword from './sign-up-with-email-and-password/sign-up-with-email-and-password.component';
import SignInWithSocial from '../signin/sign-in-with-social/sign-in-with-social';

import {
  SignUpPageDiv
  } from './sign-up-page.styles';


const SignUpPage = () => {
  return (
    <SignUpPageDiv>
      <SignUpWithEmailAndPassword />
      <CustomDivider>or</CustomDivider>
      <SignInWithSocial />
    </SignUpPageDiv>
  )
}

export default SignUpPage;