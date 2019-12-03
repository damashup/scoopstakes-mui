import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import {ProfileDisplayNameTypography, ProfilePictureAvatar, LoggedInPaper} from './styles';

const LoggedInProfile = ({currentUser}) => (
    <LoggedInPaper elevation={8}>
       <Grid container direction='column' alignItems='center' justify='space-between' >

          <ProfilePictureAvatar 
            alt="User" 
            component={RouterLink} 
            src={`https://steemitimages.com/u/${currentUser.steemUsername}/avatar`} to="/settings" 
          />
          <ProfileDisplayNameTypography variant="h4">
            {currentUser.displayName}
          </ProfileDisplayNameTypography>
          <Typography variant="body2">
            {currentUser.patreon ? 'Patreon Member' : 'Non-Patreon'}
          </Typography>
        </Grid>  
      </LoggedInPaper>        
  );
 
export default LoggedInProfile;
