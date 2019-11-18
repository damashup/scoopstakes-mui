import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { Grid, Container } from '@material-ui/core';
import { selectDirectorySections } from '../../redux/directory/selectors/directory.selectors';
import { createStructuredSelector } from 'reselect';
import SubsectionTitle from './components/subtitle';
import SubsectionBreadcrumbs from './components/breadcrumbs';
import RightSideBar from './right-sidebar';

const Subsection = ({sections, match}) => {
    const sectionData = sections ? sections.find(({linkUrl}) => linkUrl === match.params.section) :  '';
    const {subsections} = sectionData ? sectionData : '';
    const subsectionData = subsections ? subsections.find(({linkUrl}) => linkUrl === match.params.subsection): '';
    return (
    <Container maxWidth="lg">
        <Grid container spacing={1}>
            <Grid item xs={9}>
                <Grid container>
                    <SubsectionBreadcrumbs />
                </Grid>
                <Grid item xs={12}><SubsectionTitle subtitle={subsectionData ? subsectionData.title : ''} /></Grid>
                
                <Grid item xs={12}>Subsection content placeholder </Grid>                
            </Grid>
        
            <Grid item xs={3}>
                <RightSideBar />
            </Grid>
        </Grid>
    </Container>
    )
}

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
  });
  
  export default withRouter(connect(mapStateToProps)(Subsection));