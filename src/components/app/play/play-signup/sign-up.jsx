import React, {useState} from 'react';
import {connect} from 'react-redux';
import { Formik, Form, Field } from 'formik';
import TextFormField from '../../../page-elements/form/formik/form-fields/text-field/text-form-field';
import { Button } from '@material-ui/core';


import {
        SignUpTextDiv,
        SignUpWithEmailPasswordDiv,
        SignUpWithEmailPasswordHeading
        } from './styles';

import { signUpStart } from '../../../../redux/user/actions/sign-up/start/sign-up-start.action';

const SignUp = ({signUpStart}) => {
    const initial_state = {displayName: '', email: '', password: ''};
    const [userCredentials, setUserCredentials] = useState(initial_state)

    const { displayName, email, password} = userCredentials;

    if(userCredentials!== initial_state) signUpStart({displayName, email, password});
    
    console.log(displayName, email, password)

    return (
<SignUpWithEmailPasswordDiv>
        <SignUpWithEmailPasswordHeading>Need an Account?</SignUpWithEmailPasswordHeading>
        <SignUpTextDiv>Sign up with email/ password</SignUpTextDiv>
            <Formik 

                initialValues={{displayName: '', 
                                email: '', 
                                password: ''}} 

                onSubmit={(     data, 
                            {   setSubmitting, 
                                resetForm
                            }
                            ) => {
                                setSubmitting(true);
                                // make async call
                                setUserCredentials({ displayName: data.displayName,
                                                    email: data.email,
                                                    password: data.password
                                                    })
                                resetForm()                    
                }}
            >

            {(values, isSubmitting ) => (

                <Form>
  
                        <Field
                            placeholder='Enter a display name'
                            label='Display Name' 
                            name='displayName' 
                            component={TextFormField}
                            variant="outlined"
                        />

                        <Field
                            placeholder='Enter your email'
                            label='Email' 
                            name='email' 
                            component={TextFormField}
                            variant="outlined"
                        />

                        <Field
                            placeholder='Enter a password'
                            label='Password' 
                            name='password' 
                            component={TextFormField}
                            variant="outlined"
                        />

                        <Field
                            placeholder='Re-enter password'
                            label='Confirm Password' 
                            name='confirmPassword' 
                            component={TextFormField}
                            variant="outlined"
                        />

                        <Button 
                            disabled={isSubmitting} 
                            type='submit' 
                            variant='outlined' 
                            color='primary'
                            fullWidth
                        >
                            Submit
                        </Button>
                </Form>
            )}

            </Formik>

      </SignUpWithEmailPasswordDiv>           

)};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  })
  
export default connect(null,mapDispatchToProps)(SignUp);