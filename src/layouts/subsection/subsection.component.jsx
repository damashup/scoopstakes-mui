import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { Grid} from '@material-ui/core';
import { selectDirectorySections } from '../../redux/directory/selectors/directory.selectors';
import { createStructuredSelector } from 'reselect';
import SubsectionRoutes from './components/routes';

import {
        SubsectionTitleGrid,
        SectionTitleTypography,
        SubSectionTitleTypography,
        } from './styles';

const Subsection = ({sections, match}) => {
    const section = match.params.section
    const sectionData = sections ? sections.find(({linkUrl}) => linkUrl === match.params.section) :  '';
    const {subsections} = sectionData ? sectionData : '';
    const subsectionData = subsections ? subsections.find(({linkUrl}) => linkUrl === match.params.subsection): '';
    return (
    <Grid container direction='row' spacing={2}>
        
        {section}
        <SubsectionTitleGrid item xs={12}>
            <Grid container direction='row' alignItems='center' spacing={2}>
                <SectionTitleTypography variant='h3'>{section} &nbsp; / &nbsp; </SectionTitleTypography>
                <SubSectionTitleTypography variant='h3'>{subsectionData ? subsectionData.title : ''}  </SubSectionTitleTypography>  
                {/* <SubsectionTitle subtitle={subsectionData ? subsectionData.title : ''} /> */}
            </Grid>
        </SubsectionTitleGrid>

        <Grid item xs={12}><SubsectionRoutes /></Grid> 

    </Grid>
    )
}

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
  });
  
  export default withRouter(connect(mapStateToProps)(Subsection));