import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PageTitle from '../../../components/page-elements/page-title';
import { Breadcrumbs, Link } from '@material-ui/core';
import { selectDirectorySections } from '../../../redux/directory/selectors/directory.selectors';

const DashboardSubsection = ({match,sections}) => {
    console.log(match.params.subsection);
    const base = match.path.split("/:").shift();
    console.log(base);
    const baseInfo = sections.find(({href}) => href === base); // e.g. dashboard
    const {subsections} = baseInfo;
    console.log(subsections);
    const subInfo = subsections.find(({linkUrl}) => linkUrl === match.params.subsection);
    console.log(subInfo)

    
    const sub = match.params.subsection
    return (

            <>
            <PageTitle title='Dashboard' />
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href={base}>Dashboard</Link>
              <Link color="inherit" href={`${base}${sub}`}>{subInfo.title}</Link>
            </Breadcrumbs>
            <h1>
              This is Dashboard SUBSECTION Placeholder
            </h1>
            </>
    )
}

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
  });
  
  export default connect(mapStateToProps)(DashboardSubsection);
