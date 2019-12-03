import React from 'react'
import { Field } from 'formik'
import MenuItem from '@material-ui/core/MenuItem';
import SelectInputSimple from '../../../../../page-elements/form/formik/input/select-input-simple';

const SportTypes = [
    {id: 1, order: 10, name: 'football'},
    {id: 2, order: 20, name: 'mma'}
]


const SportSelector = () => {
    return (
        <Field as={SelectInputSimple} name="sport">
            {SportTypes.map(sport => (
                <MenuItem value={sport.id} key={sport.id}>{sport.name}</MenuItem>
            ))}
        </Field>
    )
}

export default SportSelector
