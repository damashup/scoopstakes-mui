import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../../../../page-elements/form/form-input-horizontal';

import { emailSignInStart } from '../../../../../redux/user/actions/sign-in/start/with-email/email-sign-in-start.action';

import {
    FormHorizontal,
    SignInButton,
} from './styles';
import { Grid} from '@material-ui/core';


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
      
        <FormHorizontal onSubmit={handleSubmit}>
              <Grid container direction='column' alignItems='center'>
                <Grid item xs={12}>

                  <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='Email'
                    required
                  />

                </Grid>
                
                <Grid item xs={12}>

                  <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <SignInButton 
                    type='submit'
                    //isEmailSignIn 
                    fullWidth>
                      Login
                  </SignInButton>
                </Grid>
                
              </Grid> 
                
            </FormHorizontal>
    
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
