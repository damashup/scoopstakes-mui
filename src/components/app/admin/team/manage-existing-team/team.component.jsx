import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllTeams } from '../../../../../redux/team/selectors/team.selectors';
import AllTeamsTable from './table';

const TeamList = ({allTeams}) => {
    return <AllTeamsTable allTeams={allTeams}/>

}

const mapStateToProps = createStructuredSelector({
    allTeams: selectAllTeams
})

export default connect(mapStateToProps)(TeamList);
