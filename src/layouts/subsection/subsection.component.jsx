import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Redirect} from 'react-router-dom'
import { Grid, Container } from '@material-ui/core';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import SubsectionTitle from './components/subtitle';
import SectionTitle from '../section/components/title';

const Subsection = ({sections, match,history}) => {
    console.log(match);
    console.log(history);
    console.log(sections);
    return (
    <Container maxWidth="lg">
        <Grid container spacing={3}>
            <Grid item xs={10}>
                <Grid container><SectionTitle title={match.params.section} /></Grid>
                <Grid container>Section breadcrumbs placeholder</Grid>
                <Grid item xs={12}><SubsectionTitle subtitle={`${match.params.subsection}`} /></Grid>
                
                <Grid item xs={12}>Subsection content placeholder </Grid>                
            </Grid>
        
            <Grid item xs={2}>
                Right Nav menu
            {/* {sections.map(({title,id,linkUrl}) => (
                <RouterLink to={`/${linkUrl}`} key={id}>
                    <Button fullWidth>{title}</Button>
                </RouterLink>
            ))} */}
            </Grid>
        </Grid>
    </Container>
    )
}

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
  });
  
  export default withRouter(connect(mapStateToProps)(Subsection));