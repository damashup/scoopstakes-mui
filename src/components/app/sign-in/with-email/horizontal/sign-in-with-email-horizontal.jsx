import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../../../../page-elements/form/form-input-horizontal';

import { emailSignInStart } from '../../../../../redux/user/actions/sign-in/start/with-email/email-sign-in-start.action';

import {
    FormHorizontal,
    SignInButton,
  SignInTextDiv,
  SignInWithEmailPasswordDiv,
  SignUpLink,
  SignInButtonWrapper
} from './styles';
import { Grid } from '@material-ui/core';


const SignInWithEmailPassword = ({ emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const { email, password } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <>
        <Grid item xs={12}>
          <SignInWithEmailPasswordDiv>Sign In</SignInWithEmailPasswordDiv> 
        </Grid>
        <FormHorizontal onSubmit={handleSubmit}>
              <Grid container direction='row' justify='flex-start' alignItems='center'>

                <FormInput
                  name='email'
                  type='email'
                  handleChange={handleChange}
                  value={email}
                  label='Email'
                  required
                />
                <FormInput
                  name='password'
                  type='password'
                  value={password}
                  handleChange={handleChange}
                  label='Password'
                  required
                />
                
                <SignInButtonWrapper>
                  <SignInButton variant="outlined" color={"primary"} type='submit' fullWidth>Login</SignInButton>
                </SignInButtonWrapper>
                </Grid> 
            </FormHorizontal>
        <Grid item xs={12}> 
          <SignInTextDiv>
            Need account? <SignUpLink to='/signup'>Sign-up</SignUpLink>
          </SignInTextDiv>
        </Grid> 
      
  </>  
  );
};

const mapDispatchToProps = dispatch => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignInWithEmailPassword);
