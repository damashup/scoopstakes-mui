import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllTeams } from '../../../../../redux/team/selectors/team.selectors';
import { PaginatedTable } from '../../../../page-elements/table';

const TeamList = ({allTeams}) => {
    return <PaginatedTable 
                data={allTeams}
                rowType='ManageExistingTeams'
            />

}

const mapStateToProps = createStructuredSelector({
    allTeams: selectAllTeams
})

export default connect(mapStateToProps)(TeamList);
