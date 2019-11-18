import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {PageDiv} from '../../components/page-styles/base-styles';
import PageTitle from '../../components/page-elements/page-title/page-title.component';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, Route } from 'react-router-dom';


import { selectCurrentUser } from "../../redux/user/selectors/user.selectors";
// import { selectedRound } from "../../redux/round/round.selectors";

import { Breadcrumbs, Link } from "@material-ui/core";
import { selectDirectorySections } from "../../redux/directory/selectors/directory.selectors";
import DashboardSubSection from './subsection';

function DashbboardNavigation(){
  return
}



function DashboardHome (){
  return (
    <h1>
      This is Dashboard Home Placeholder
    </h1>
  )
}


const Dashboard = ({currentUser,selectedRound, match, sections}) => {
  const dashboardItems = sections.find(({linkUrl}) => linkUrl === 'dashboard');
  const {subsections} = dashboardItems
  console.log(match.path);
    return (
      <PageDiv>
        
        <Container maxWidth="lg">
            <PageTitle title='Dashboard' />
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href={match.url}>Dashboard</Link>
            </Breadcrumbs>

            <h2>Navigation</h2>
            <ul>
              <li><Link color="inherit" href='/dashboard'>Dashboard</Link></li>
              {subsections.map(({id, title, linkUrl}) => (
                <li key={id}><Link color="inherit" href={`/dashboard/${linkUrl}`}>{title}</Link></li>
              )) }
            </ul>

            
            

        </Container>
      
      </PageDiv>
      
    );
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  // selectedRound: selectedRound,
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Dashboard);
