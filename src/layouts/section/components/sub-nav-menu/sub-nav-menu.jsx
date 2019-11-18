import React from 'react'
import {Link as RouterLink, withRouter} from 'react-router-dom';
import {Typography, Grid} from '@material-ui/core';

const SubNavMenu = ({items, history, location, match, path}) => {
    return (
        <>
            {items ? items.map(item => (
                <Grid item xs={2}>
                    <Typography key={item.id}>
                    <RouterLink to={`/${path}/${item.linkUrl}`} >
                    {item.title}
                    </RouterLink>
                    </Typography>
                </Grid>
                    )) : null}
                                 
        </>
    )
}
export default withRouter(SubNavMenu);