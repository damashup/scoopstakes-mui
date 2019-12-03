import React from 'react'
import { Field } from 'formik'
import { TextField } from '@material-ui/core';


const SelectDateTimeSimple = ({...props}) => {
    console.log(props);
    return (
        <TextField
                            id="datetime-local"
                            label={props.label}
                            type="datetime-local"
                            // defaultValue="2017-05-24T10:30"
                            name={props.name}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
    )
}


const DateSelector = ({name, label}) => {
    return (
        <Field as={SelectDateTimeSimple} name={name} label={label} />

    )
}

export default DateSelector
