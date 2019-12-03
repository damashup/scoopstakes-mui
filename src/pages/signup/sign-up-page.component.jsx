import React from 'react'

import CustomDivider from '../../components/page-elements/divider/custom-divider/custom-divider.component';
import SignInWithSocial from '../../components/app/sign-in/with-social/sign-in-with-social';
import SignUp from '../../components/app/sign-up';
import {SignUpPageGrid} from './sign-up-page.styles';


const SignUpPage = () => {
  return (
    <SignUpPageGrid>
      <SignUp />
      <CustomDivider>or</CustomDivider>
      <SignInWithSocial />
    </SignUpPageGrid>
  )
}

export default SignUpPage;
