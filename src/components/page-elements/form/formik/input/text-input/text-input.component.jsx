import React from 'react';
import {getIn, useField} from 'formik';

import {TextField} from '@material-ui/core';

const TextInput = ({field, form: {errors}, ...props}) => {
    const errorMessage = getIn(errors, field.name);
   return (
        <>      
            <TextField {...field} variant="outlined" label={props.labelName} />
            {errorMessage && (<div style={{color: "red"}}>{errorMessage}</div>)} 
        </>    
   ); 
}

export default TextInput;