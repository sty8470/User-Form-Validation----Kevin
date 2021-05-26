import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = ({ handleChange }) => {

    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#53b953' }
    const btnStyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validationSchema=Yup.object().shape({
        username: Yup.string().email('Please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        // This function will be triggered after 2 seconds
        setTimeout(()=>{
            props.resetForm()
            props.setSubmitting(false)
        },2000)
        
    }

    return (
        <Grid>
            {/* Paper is for background gradation and Variant is for outlied surface */}
            {/* Avatar is for image, letter, and icon controls */}
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username" 
                            placeholder='Enter username' fullWidth required 
                            helperText={<ErrorMessage name="username"/>}
                            />
                            <Field as={TextField} label='Password' name="password" 
                            placeholder='Enter password' type='password' fullWidth required 
                            helperText={<ErrorMessage name="password"/>}
                            />
                            <Field as={FormControlLabel}
                                name="remember"
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button type='submit' color='primary' fullWidth variant='contained' disabled={props.isSubmitting}
                            style={btnStyle}>{props.isSubmitting?"Loading":"Sign in"}</Button>
                        </Form>
                    )}
                </Formik>
                {/* Typography is to standardize the text */}
                <Typography>
                    <Link href="#">
                        Forgot password ?
                        </Link>
                </Typography>
                <Typography>
                    Do you have an account?
                        <Link href="#" onClick={() => handleChange("event", 1)}>
                        Sign up
                        </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login