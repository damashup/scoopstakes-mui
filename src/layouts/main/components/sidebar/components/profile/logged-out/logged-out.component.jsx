import React from 'react';
import {Grid} from '@material-ui/core';
import {SignInButton} from './styles';

const Profile = () => (
        <Grid container alignItems='center' justify='center' >
          <Grid item xs={12}>
            <SignInButton
                href='/play/sign-in'
                fullWidth
              >
                Sign In
              </SignInButton>
          </Grid>

        </Grid> 
  );
 

export default Profile;
