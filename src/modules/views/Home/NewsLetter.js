import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import TextField from '../../components/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '../../components/Button';
import { useTheme } from '@mui/material/styles';
import axios from 'axios'; // Import Axios
import Slide from '@mui/material/Slide'; // Import Slide transition


function NewsLetter() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [severity, setSeverity] = useState('success'); // Initialize severity with 'success'
    const theme = useTheme();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;

        try {
            setLoading(true);

            // Use Axios to make the POST request
            const response = await axios.post('http://localhost:3001/api/mysql/addSubscriber', { email });

            if (response.status === 201) {
                setOpen(true);
                setSnackbarMessage(response.data.message);
                setSeverity('success'); // Set severity to 'success' for successful actions
            } else {
                // console.error("Error: ", response.data);
                setSeverity('error'); // Set severity to 'error' for other errors
            }
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.error === 'This email is already subscribed') {
                // If the error is due to the email already being subscribed, set the appropriate snackbar message
                setSnackbarMessage('This email is already subscribed.');
                setSeverity('info'); // Set severity to 'info' for duplicate emails
            } else {
                // Otherwise, set a generic error message
                setSnackbarMessage('An error occurred while subscribing. Please try again.');
                setSeverity('warning'); // Set severity to 'warning' for other errors
            }
            setOpen(true);
        } finally {
            setLoading(false);
        }
    };



    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container component="section" sx={{ my: 10, display: 'flex' }}>
            <Grid container>
                <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            bgcolor: 'warning.main',
                            py: 4,
                            px: 2,
                            [theme.breakpoints.up('md')]: {
                                py: 8,
                                px: 3,
                            },
                        }}
                    >
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                maxWidth: 400,
                                width: '100%',
                            }}
                        >
                            <Typography variant="h2" component="h2" gutterBottom>
                                Receive offers
                            </Typography>
                            <Typography variant="h5">
                                Taste the holidays of the everyday close to home.
                            </Typography>
                            <TextField
                                name="email"
                                noBorder
                                placeholder="Your email"
                                variant="standard"
                                sx={{ width: '100%', mt: 3, mb: 2 }}
                            />
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                sx={{ width: '100%' }}
                                disabled={loading}
                            >
                                {loading ? 'Subscribing...' : 'Keep me updated'}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: 'flex', position: 'relative' }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            background: `url(${require('../../assets/images/productCTAImageDots.png')})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Box
                        component="img"
                        src={require("../../assets/images/Storephoto.png")}
                        alt="call to action"
                        sx={{
                            mt: 2,
                            width: '100%',
                            maxWidth: 500,
                            maxHeight: 425,
                            [theme.breakpoints.down('sm')]: {
                                maxWidth: '90%',
                                maxHeight: '90%',
                                pb: 1,
                                mr: 1.75,
                                mt: 0,
                            },
                        }}
                    />
                </Grid>
            </Grid>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                TransitionComponent={Slide} // Set the transition to Slide
            >
                <Alert onClose={handleClose} variant='filled' severity={severity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default NewsLetter;
