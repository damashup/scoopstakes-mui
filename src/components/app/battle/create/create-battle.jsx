import React, {useState} from 'react';
import {connect} from 'react-redux';
import { Formik, Form } from 'formik';
import TextFormField from '../../../page-elements/form/formik/form-fields/text-field/text-form-field';

import {addNewTeamStart} from '../../../../redux/team/actions';
import fetchAllTeamsStart from '../../../../redux/team/actions/fetch-all-teams/start';

import {FormField, SubmitButton} from './styles'

const AddTeamInput = ({addNewTeamStart, fetchAllTeams}) => {
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
                                fetchAllTeams()                    
                                resetForm()                    
                }}
            >

            {(values, isSubmitting ) => (

                <Form>
  
                        <FormField
                            placeholder='Enter Team Name or athletes name'
                            label='Name' 
                            name='team_name' 
                            component={TextFormField}
                            variant="outlined"
                        />

                        <FormField
                            placeholder='Enter Short name or nickname'
                            label='Short name' 
                            name='team_short' 
                            component={TextFormField}
                            variant="outlined"
                        />

                        <FormField
                            placeholder='Enter url link to logo or avatar image'
                            label='Logo Url' 
                            name='logo' 
                            component={TextFormField}
                            variant="outlined"
                        />

                            <SubmitButton 
                                disabled={isSubmitting} 
                                type='submit' 
                                fullWidth
                            >
                                Submit
                            </SubmitButton>

                        {/* <pre>
                            {JSON.stringify(values, null, 2)}
                        </pre> */}
                </Form>
            )}

            </Formik>
            

)};



const mapDispatchToProps = dispatch => ({
    addNewTeamStart: newTeamDetails => dispatch(addNewTeamStart(newTeamDetails)),
    fetchAllTeams: () => dispatch(fetchAllTeamsStart())
  })
  
export default connect(null,mapDispatchToProps)(AddTeamInput);