import React from 'react';
import {connect} from 'react-redux';
import { Box, Button, Grid } from '@material-ui/core';
import {ActionGrid} from './styles';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../../../redux/user/selectors/user.selectors';
import LoginToPlayButton from './login-to-play/login-to-play';

const ActionButton = ({currentUser}) => {

    return (

        currentUser ?  
        <>  
        <ActionGrid container justify='space-between' spacing={2}>
            <Grid item xs={6}>
                <Button variant='outlined' fullWidth>Edit predictions</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant='outlined' fullWidth>Randomize your predictions</Button>
            </Grid>  
        </ActionGrid>
        </>
        : <LoginToPlayButton />
        
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});    

export default connect(mapStateToProps)(ActionButton);
