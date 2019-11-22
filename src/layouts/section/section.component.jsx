import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Redirect} from 'react-router-dom'
import { Grid, Container, Divider} from '@material-ui/core';
import { selectDirectorySections } from '../../redux/directory/selectors/directory.selectors';
import { createStructuredSelector } from 'reselect';
import SectionTitle from './components/title';
import Subsection from '../subsection';
import {Landing, SignIn} from '../../pages';

const Section = ({sections, match, currentUser}) => {
    const sectionData = sections ? sections.find(({linkUrl}) => linkUrl === match.params.section) : null;

    return (
       <Container maxWidth="lg">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Grid container><SectionTitle title={sectionData ? sectionData.title : null} /></Grid>
                    <Divider />
                </Grid>
                <Route exact path='/signin' render={() => currentUser ? <Redirect to='/dashboard' />: <SignIn />} />
                <Route path='/play'  component={Landing}/> 
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

