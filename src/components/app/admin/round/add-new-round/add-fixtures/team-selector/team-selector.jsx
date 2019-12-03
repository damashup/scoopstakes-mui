import React from 'react'
import {connect} from 'react-redux'
import { Field } from 'formik'
import MenuItem from '@material-ui/core/MenuItem';
import SelectInputSimple from '../../../../../../page-elements/form/formik/input/select-input-simple';
import { selectAllTeams } from '../../../../../../../redux/team/selectors/team.selectors';
import { createStructuredSelector } from 'reselect';


const TeamSelector = ({name, allTeams}) => {
    return (
        <Field as={SelectInputSimple} name={name}>
            {allTeams 
            ?
            allTeams.map(team =>{ 
                const {id, team_name, logo} = team;
                const savedValues = {id, team_name, logo};
                return (
                <MenuItem value={savedValues} key={team.id}>{team.team_name}</MenuItem>
            )})
            : 'loading...'
            }
        </Field>
    )
}

const mapStateToProps = createStructuredSelector({
    allTeams: selectAllTeams
})

export default connect(mapStateToProps)(TeamSelector);
