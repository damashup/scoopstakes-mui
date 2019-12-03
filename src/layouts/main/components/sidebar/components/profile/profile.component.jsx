import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from '../../../../../../redux/user/selectors/user.selectors';
import LoggedInProfile from './logged-in';
import LoggedOutProfile from './logged-out'
import { Grid } from '@material-ui/core';

const Profile = ({currentUser}) => (
    <div>      
        { currentUser ?
       <Grid container direction='column' alignItems='center' justify='space-between'>
         <LoggedInProfile currentUser={currentUser}/>
        </Grid>  
        : 
        <Grid container direction='column' alignItems='center' justify='space-between'>
          <LoggedOutProfile />
        </Grid>
        } 
   </div>   
  );

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})      

export default connect(mapStateToProps)(Profile);
