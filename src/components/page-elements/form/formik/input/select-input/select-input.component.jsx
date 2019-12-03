import React from 'react';
import {useField} from 'formik';
import {TextField, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

const SelectInputSimple = ({variant, label, sourceData, ...props}) => {
    const [age, setAge] = React.useState('');
    const handleChange = event => {
        setAge(event.target.value);
      };
    const[field, meta] = useField(props);
    return (
        <FormControl variant={variant}>
            <InputLabel id="demo-simple-select-outlined-label">
            {label}
            </InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {sourceData.map(data => {
                return (
                    <MenuItem value={data.name} key={data.id}>
                        {data.name}
                    </MenuItem>
                )
            })}
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
            </FormControl>
    )
}

export default SelectInputSimple;

