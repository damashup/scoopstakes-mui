import React from 'react';
import {withRouter} from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';

const AdminNavButtons = ({path, task, history}) => {

    const handleSelection = clicktype => {
        history.push(`${path}/${clicktype}`);}
    return (
            <Grid
                container
                direction='row'
                justify='flex-start'
                alignItems='center'
                spacing={3}
            >
                <Grid item xs={2}>
                    <Button 
                        variant={(task==='create-round' ) ? 'contained' : 'outlined'}
                        color='primary' 
                        onClick={() => handleSelection('create-round')}
                        fullWidth 
                    >
                        Rounds
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button 
                        variant={(task==='add-team' ) ? 'contained' : 'outlined'}
                        color='primary'
                        onClick={() => handleSelection('add-team')}
                        fullWidth 
                    >
                        Teams
                    </Button>
                </Grid>          
            </Grid>
    )
}

export default withRouter(AdminNavButtons);