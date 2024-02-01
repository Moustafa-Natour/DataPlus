import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import TextField from '../../components/TextField';
import Snackbar from '../../components/Snackbar';
import Button from '../../components/Button';
import { useTheme } from '@mui/material/styles';

function NewsLetter() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
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
                            py: 4, // Adjust the padding for smaller screens
                            px: 2, // Adjust the padding for smaller screens
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
                                width: '100%', // Adjust the width for smaller screens
                            }}
                        >
                            <Typography variant="h2" component="h2" gutterBottom>
                                Receive offers
                            </Typography>
                            <Typography variant="h5">
                                Taste the holidays of the everyday close to home.
                            </Typography>
                            <TextField
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
                            >
                                Keep me updated
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
                            backgroundSize: 'contain', // Adjust the background size as needed
                            backgroundPosition: 'center', // Center the background
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
                                maxWidth: '90%', // Adjust image size for smaller screens
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
                closeFunc={handleClose}
                message="We will send you our best offers, once a week."
            />
        </Container>
    );
}

export default NewsLetter;
