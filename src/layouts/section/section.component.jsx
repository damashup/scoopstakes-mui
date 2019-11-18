import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Redirect, Link as RouterLink, Switch} from 'react-router-dom'
import { Grid, Container, Button } from '@material-ui/core';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import SectionTitle from './components/title';
import Subsection from '../subsection';

const Section = ({sections, match,history}) => {
    console.log(match);
    console.log(history);
    console.log(sections);
    return (
       <Container maxWidth="lg">
        <Grid container spacing={3}>
            <Grid item xs={10}>
                <Grid container><SectionTitle title={match.params.section} /></Grid>
            </Grid>            
        </Grid>
        </Container>
    )
}

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
  });
  
  export default withRouter(connect(mapStateToProps)(Section));

