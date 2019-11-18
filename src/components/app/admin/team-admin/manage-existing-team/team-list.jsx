import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllTeams } from '../../../../../redux/team/selectors/team.selectors';
import { TeamLogoAvatar } from '../team-logo/team-avatar.styles';
import { Grid, Typography, Button, Paper } from '@material-ui/core';

const TeamList = ({allTeams}) => {
    console.log(allTeams)
    const sortedTeams = allTeams ? allTeams.sort((a, b) => a.createdAt < b.createdAt) : null;
    console.log(sortedTeams)
    return (
        <>
            
            {allTeams ? 
                sortedTeams.map(team =>(
                <Paper elevation={2} key={team.id}>
                <Grid container direction='row' justify='center' alignItems='center' spacing={3}>
                    <Grid item xs={2}><TeamLogoAvatar alt='logo' src={team.logo} /></Grid>
                    <Grid item xs={4}><Typography variant='h5' component='h5'>{team.team_name}</Typography>{team.team_short}</Grid>
                    <Grid item xs={2}><Button variant='outlined' color='primary' fullWidth>Edit</Button></Grid>
                    <Grid item xs={2}><Button variant='outlined' color='secondary' fullWidth>Delete</Button></Grid>    
                </Grid>
                </Paper>
                ))
            : null
            }
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    allTeams: selectAllTeams
})

export default connect(mapStateToProps)(TeamList);
