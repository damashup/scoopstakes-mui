import React from 'react';
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, Link, Typography, Paper } from '@material-ui/core';

const SubsectionBreadcrumbs = ({match}) => {
    return (

        <>
        <Paper elevation={0}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href={`/${match.params.section}`} >
                    {match.params.section}
                </Link>
                <Typography color="textPrimary">{match.params.subsection}</Typography>
            </Breadcrumbs>
        </Paper>
        </>
    )
}

export default withRouter(SubsectionBreadcrumbs);
