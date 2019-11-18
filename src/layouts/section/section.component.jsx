import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route} from 'react-router-dom'
import { Grid, Container} from '@material-ui/core';
import { selectDirectorySections } from '../../redux/directory/selectors/directory.selectors';
import { createStructuredSelector } from 'reselect';
import SectionTitle from './components/title';
import Subsection from '../subsection';

const Section = ({sections, match}) => {
    const sectionData = sections ? sections.find(({linkUrl}) => linkUrl === match.params.section) : null;
    const {subsections} = sectionData ? sectionData : '';

    return (
       <Container maxWidth="lg">
        <Grid container spacing={1}>
            <Grid item xs={10}>
                <Grid container><SectionTitle title={sectionData ? sectionData.title : null} /></Grid>
            </Grid>
            <Route path={`${match.path}/:subsection`}>
                <Subsection />
            </Route>

        </Grid>
        </Container>
    )
}

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
  });
  
  export default withRouter(connect(mapStateToProps)(Section));

