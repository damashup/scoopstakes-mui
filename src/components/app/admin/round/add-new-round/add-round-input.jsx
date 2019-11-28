import React, {useState} from 'react';
import {connect} from 'react-redux';
import { Formik, Form, Field } from 'formik';
import TextFormField from '../../../../page-elements/form/formik/form-fields/text-field/text-form-field';
import { Button } from '@material-ui/core';

import {addNewRoundStart} from '../../../../../redux/round/actions';
import fetchAllRoundsStart from '../../../../../redux/round/actions/fetch-all-rounds/start';

import {FormField, SubmitButton} from './styles'

const AddRoundInput = ({addNewRoundStart, fetchAllRounds}) => {
    const initial_state = { actual_first_goal: '', 
                            deadline_time: '', 
                            first_ko_time: '', 
                            round_no: '',
                            round_permalink: '',
                            round_status: 'scheduled',
                            sbd_jackpot_amount: '',
                            sbd_rewards_pot: '',
                            results: '',
                            };
    const [newRoundDetails, setNewRoundDetails] = useState(initial_state)

    const { actual_first_goal, 
            deadline_time, 
            first_ko_time, 
            round_no,
            round_permalink,
            round_status,
            sbd_jackpot_amount,
            sbd_rewards_pot,
            results,
            teams,
            uid,
        } = newRoundDetails;

    
    if(newRoundDetails!== initial_state) addNewRoundStart({
                                                            deadline_time, 
                                                            first_ko_time, 
                                                            round_no,
                                                            round_status,
                                                            results,
                                                            });
    return (

            <Formik 

                initialValues={{deadline_time: '', 
                                first_ko_time: '', 
                                round_no: '',
                                round_status: '',
                                results: '',
                }} 

                onSubmit={(     data, 
                            {   setSubmitting, 
                                resetForm
                            }
                            ) => {
                                setSubmitting(true);
                                // make async call
                                setNewRoundDetails({ 
                                                    deadline_time: data.deadline_time, 
                                                    first_ko_time: data.first_ko_time, 
                                                    round_no: data.round_no,
                                                    round_status: data.round_status,
                                                    results: data.results,
                                                    })
                                //fetchAllRounds()                    
                                resetForm()                    
                }}
            >

            {(values, isSubmitting ) => (

                <Form>
  
                        <FormField
                            placeholder='Enter Round Number'
                            label='Round' 
                            name='round_no' 
                            component={TextFormField}
                            variant="outlined"
                        />

                        <FormField
                            placeholder='Enter Deadline Date'
                            label='Deadline Date' 
                            name='deadline_time' 
                            component={TextFormField}
                            variant="outlined"
                        />

                        <FormField
                            placeholder='Enter First KO time'
                            label='First KO Time' 
                            name='first_ko_time' 
                            component={TextFormField}
                            variant="outlined"
                        />

                        <FormField
                            placeholder='Add Fixtures'
                            label='Add Fixtures' 
                            name='results' 
                            component={TextFormField}
                            variant="outlined"
                        />          
                        {/* <Grid container direction='row' justify='center'> */}

                            <SubmitButton 
                                disabled={isSubmitting} 
                                type='submit'  
                                fullWidth
                            >
                                Submit
                            </SubmitButton>

                        {/* </Grid> */}
                        {/* <pre>
                            {JSON.stringify(values, null, 2)}
                        </pre> */}
                </Form>
            )}

            </Formik>
            

)};



const mapDispatchToProps = dispatch => ({
    addNewRoundStart: newTeamDetails => dispatch(addNewRoundStart(newTeamDetails)),
    fetchAllRounds: () => dispatch(fetchAllRoundsStart())
  })
  
export default connect(null,mapDispatchToProps)(AddRoundInput);