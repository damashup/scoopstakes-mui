import React, {useState} from 'react';
import {connect} from 'react-redux';
import { Formik, Form, Field } from 'formik';
import TextFormField from '../../../../page-elements/form/formik/form-fields/text-form-field';
import { Button } from '@material-ui/core';

import {addNewTeamStart} from '../../../../../redux/team/actions';

const AddTeamInput = ({addNewTeamStart}) => {
    const initial_state = {team_name: '', team_short: '', logo: ''};
    const [newTeamDetails, setNewTeamDetails] = useState(initial_state)

    const { team_name, team_short, logo} = newTeamDetails;
    if(newTeamDetails!== initial_state) addNewTeamStart({team_name, team_short, logo});
    console.log(team_name, team_short, logo)

    return (

            <Formik 

                initialValues={{team_name: '', 
                                team_short: '', 
                                logo: ''}} 

                onSubmit={(     data, 
                            {   setSubmitting, 
                                resetForm
                            }
                            ) => {
                                setSubmitting(true);
                                // make async call
                                setNewTeamDetails({ team_name: data.team_name,
                                                    team_short: data.team_short,
                                                    logo: data.logo
                                                    })
                                resetForm()                    
                }}
            >

            {(values, isSubmitting ) => (

                <Form>
  
                        <Field
                            placeholder='Enter Team Name or athletes name'
                            label='Name' 
                            name='team_name' 
                            component={TextFormField}
                            variant="outlined"
                        />

                        <Field
                            placeholder='Enter Short name or nickname'
                            label='Nickname' 
                            name='team_short' 
                            component={TextFormField}
                            variant="outlined"
                        />

                        <Field
                            placeholder='Enter url link to logo or avatar image'
                            label='Logo Url' 
                            name='logo' 
                            component={TextFormField}
                            variant="outlined"
                        />
                        {/* <Grid container direction='row' justify='center'> */}

                            <Button 
                                disabled={isSubmitting} 
                                type='submit' 
                                variant='outlined' 
                                color='primary'
                            >
                                Submit
                            </Button>

                        {/* </Grid> */}
                        {/* <pre>
                            {JSON.stringify(values, null, 2)}
                        </pre> */}
                </Form>
            )}

            </Formik>
            

)};

const mapDispatchToProps = dispatch => ({
    addNewTeamStart: newTeamDetails => dispatch(addNewTeamStart(newTeamDetails))
  })
  
export default connect(null,mapDispatchToProps)(AddTeamInput);