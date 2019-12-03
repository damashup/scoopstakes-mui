import React from 'react'
import {StyledSelect, StyledTypography} from './styles';
import { FormControl, InputLabel, Typography } from '@material-ui/core';


const SelectInputSimple = ({...props}) => {
    const selectorName = props.name.split('.').pop()
    return (
        <FormControl variant="filled">
            <InputLabel id="custom-select" >
                <StyledTypography variant='h6'>
                    Select {selectorName ? selectorName : props.name}
                </StyledTypography>
            </InputLabel>
            <StyledSelect 
                id="custom-select" 
                {...props}
                
            />
        </FormControl>
    )
}


export default SelectInputSimple

