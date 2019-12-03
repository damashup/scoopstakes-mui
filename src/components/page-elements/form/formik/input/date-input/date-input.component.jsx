import React from 'react';
import {getIn, useField} from 'formik';

import {TextField} from '@material-ui/core';

const DateInput = ({field, form: {errors}, ...props}) => {
    const errorMessage = getIn(errors, field.name);
   return (
        <>      
            <TextField 
                        {...field}
                        id="datetime-local"
                        label={props.labelName} 
                        type="datetime-local"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined" 
                    />
            {errorMessage && (<div style={{color: "red"}}>{errorMessage}</div>)} 
        </>    
   ); 
}

export default DateInput;