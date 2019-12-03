import React from 'react';
import { FieldArray, Field, useField} from 'formik';
import {generate} from 'shortid';
import TextInput from '../../../../../page-elements/form/formik/input/text-input';

import { Button, Table, TableHead, TableRow, TableCell, TableBody, Typography, FormControlLabel } from '@material-ui/core';
import TeamSelector from './team-selector/team-selector';
import DateInput from '../../../../../page-elements/form/formik/input/date-input';


const AddFixturesInput = ({values}) => {
return (
    
    <FieldArray name="results"> 
        {({push, remove}) =>(
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Game Number</TableCell>
                        <TableCell>Competition</TableCell>
                        <TableCell>KO Time</TableCell>
                        <TableCell>Home Team</TableCell>
                        <TableCell>Away Team</TableCell>
                        <TableCell>
                            <Button 
                                type="button" fullWidth variant='outlined' color='primary'
                                onClick={() => push({uid: generate(),id: '',competition: 'Premier League', koTime: '', homeTeam: '',awayTeam: ''})}

                            >
                                <Typography variant='h4'>+</Typography>
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
            {values.values.results.map((result, index) => {
            return (           
                <TableRow key={result.uid}>
                    <TableCell type='button'><Field name={`results[${index}].id`} component={TextInput} labelName='Round Number'/></TableCell>
                    <TableCell><Field name={`results[${index}].competition`} component={TextInput} labelName='Competition'/></TableCell>
                    <TableCell><Field name={`results[${index}].koTime`} component={DateInput} labelName='Kick Off Time'/></TableCell>
                    <TableCell><TeamSelector name={`results[${index}].homeTeam`} /></TableCell>
                    <TableCell><TeamSelector name={`results[${index}].awayTeam`} /></TableCell>
                    {/* <TableCell><Field name={`results[${index}].awayTeam`} component={TextInput}/></TableCell> */}
                    <TableCell align='center'>
                        
                        <Button type='button' variant='outlined' color='secondary' onClick={() => remove(index)}>
                            x
                        </Button>
                    </TableCell>
                </TableRow>
                                
                    )
                })}
                </TableBody>
            </Table>
            <Button 
                type="button" fullWidth variant='outlined' color='primary'
                onClick={() => push({uid: generate(),id: '',competition: 'Premier League', koTime: '', homeTeam: '',awayTeam: ''})}

            >
            <Typography variant='h4'>+</Typography>
            </Button>                        
            
        </div>
        )}
    </FieldArray>
           
);
};

  
export default AddFixturesInput;