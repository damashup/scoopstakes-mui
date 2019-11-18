import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link as RouterLink, withRouter} from 'react-router-dom';
import {Typography, Grid} from '@material-ui/core';
import { selectDirectorySections } from '../../../../redux/directory/selectors/directory.selectors';

const SubNavMenu = ({directorySections, match}) => {
    console.log(match.params.section)
    const items = directorySections ? directorySections.find(({linkUrl}) => linkUrl === match.params.section) : '';
    const {subsections} = items

    return (
        <>
            {subsections ? subsections.map(item => (
                <Grid item xs={2}>
                    <Typography key={item.id}>
                    <RouterLink to={`/${match.params.section}/${item.linkUrl}`} >
                    {item.linkUrl}
                    </RouterLink>
                    </Typography>
                </Grid>
                    )) : null}
                                 
        </>
    )
}

const mapStateToProps = createStructuredSelector ({
    directorySections: selectDirectorySections
})

export default withRouter(connect(mapStateToProps)(SubNavMenu));