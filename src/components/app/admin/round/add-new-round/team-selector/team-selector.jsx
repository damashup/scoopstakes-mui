import React from 'react'
import { Field } from 'formik'
import MenuItem from '@material-ui/core/MenuItem';
import SelectInputSimple from '../../../../../../page-elements/form/formik/input/select-input-simple';

const TeamTypes = [
    {id: 1, order: 10, name: 'football'},
    {id: 2, order: 20, name: 'mma'}
]


const TeamSelector = () => {
    return (
        <Field as={SelectInputSimple} name="homeTeam" label='Home Team'>
            {TeamTypes.map(homeTeam => (
                <MenuItem value={homeTeam.id} key={homeTeam.id}>{homeTeam.name}</MenuItem>
            ))}
        </Field>
    )
}

export default TeamSelector
