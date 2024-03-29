
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../../../components/Typography';
import AppForm from './AppForm';
import { email, required } from '../../../form/validation';
import RFTextField from '../../../form/RFTextField';
import FormButton from '../../../form/FormButton';
import FormFeedback from '../../../form/FormFeedback';
import withRoot from '../../../withRoot';
import useAuth from "./useAuth"; // import useAuth

function SignUp() {
    const [user, setUser] = useState({});
    const [sent, setSent] = React.useState(false);
    const { signup } = useAuth();

    const validate = (values) => {
        const errors = required(['firstName', 'lastName', 'email', 'password'], values);

        if (!errors.email) {
            const emailError = email(values.email);
            if (emailError) {
                errors.email = emailError;
            }
        }

        return errors;
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setSent(true);
        try {
            await signup(user.email, user.password, user.fistName, user.lastName);
            alert("Account created successfully!");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <React.Fragment>
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        Sign Up
                    </Typography>
                    <Typography variant="body2" align="center">
                        <Link href="/signin" underline="always">
                            Already have an account?
                        </Link>
                    </Typography>
                </React.Fragment>
                <Form
                    onSubmit={handleSubmit}
                    subscription={{ submitting: true }}
                    validate={validate}
                >
                    {({ handleSubmit: handleSubmit2, submitting }) => (
                        <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        autoFocus
                                        component={RFTextField}
                                        disabled={submitting || sent}
                                        autoComplete="given-name"
                                        fullWidth
                                        onSubmit={handleChange}
                                        label="First name"
                                        name="firstName"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        onSubmit={handleChange}
                                        component={RFTextField}
                                        disabled={submitting || sent}
                                        autoComplete="family-name"
                                        fullWidth
                                        label="Last name"
                                        name="lastName"
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Field
                                onSubmit={handleChange}
                                autoComplete="email"
                                component={RFTextField}
                                disabled={submitting || sent}
                                fullWidth
                                label="Email"
                                margin="normal"
                                name="email"
                                required
                            />
                            <Field
                                onSubmit={handleChange}
                                fullWidth
                                component={RFTextField}
                                disabled={submitting || sent}
                                required
                                name="password"
                                autoComplete="new-password"
                                label="Password"
                                type="password"
                                margin="normal"
                            />
                            <FormSpy subscription={{ submitError: true }}>
                                {({ submitError }) =>
                                    submitError ? (
                                        <FormFeedback error sx={{ mt: 2 }}>
                                            {submitError}
                                        </FormFeedback>
                                    ) : null
                                }
                            </FormSpy>
                            <FormButton
                                sx={{ mt: 3, mb: 2 }}
                                disabled={submitting || sent}
                                color="secondary"
                                fullWidth
                            >
                                {submitting || sent ? 'In progress…' : 'Sign Up'}
                            </FormButton>
                        </Box>
                    )}
                </Form>
            </AppForm>
        </React.Fragment>
    );
}

export default withRoot(SignUp);