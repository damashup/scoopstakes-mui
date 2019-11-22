import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route} from 'react-router-dom'
import { Grid} from '@material-ui/core';
import { selectDirectorySections } from '../../redux/directory/selectors/directory.selectors';
import { createStructuredSelector } from 'reselect';
import SubsectionTitle from './components/subtitle';
import SubsectionBreadcrumbs from './components/breadcrumbs';
import {AdminTeam} from '../../components/app/admin'

const Subsection = ({sections, match}) => {
    const sectionData = sections ? sections.find(({linkUrl}) => linkUrl === match.params.section) :  '';
    const {subsections} = sectionData ? sectionData : '';
    const subsectionData = subsections ? subsections.find(({linkUrl}) => linkUrl === match.params.subsection): '';
    return (
        <Grid container direction='row' spacing={4}>
  

                <Grid item xs={12}><SubsectionBreadcrumbs /></Grid>
                {/* <Divider /> */}
                <Grid item xs={12}><SubsectionTitle subtitle={subsectionData ? subsectionData.title : ''} /></Grid>
                
                <Grid item xs={12}>
                    <Route path='/admin/team'  component={AdminTeam}/>
                </Grid>            

            

    </Grid>
    )
}

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
  });
  
  export default withRouter(connect(mapStateToProps)(Subsection));