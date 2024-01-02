import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

function Copyright() {
    return (
        <React.Fragment>
            {'© '}
            <Link color="inherit" href="/">
                DATA PLUS
            </Link>{' '}
            {new Date().getFullYear()}
        </React.Fragment>
    );
}

const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff', // Default icon color
    mr: 1,
    borderRadius: '50%',
    transition: 'background-color 0.3s',
    '&:hover': {
        backgroundColor: '#13489e', // Default background color on hover
    },
};

const facebookIconStyle = {
    backgroundColor: '#1877f2', // Facebook blue color
};

const whatsappIconStyle = {
    backgroundColor: '#25D366', // WhatsApp green color
    '&:hover': {
        backgroundColor: '#128C7E', // Darker shade of WhatsApp green on hover
    },
};

const LANGUAGES = [
    {
        code: 'en-US',
        name: 'English',
    },
    {
        code: 'fr-FR',
        name: 'Français',
    },
];

const handlePageChange = (url) => {
    window.open(url, '_blank');
};

const handleWhatsAppClick = () => {
    // Replace 'your-number' with your WhatsApp number
    const phoneNumber = '+96170318228';
    const message = 'Hello, I have a question!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

export default function AppFooter() {
    return (
        <Typography component="footer" sx={{
            display: 'flex', bgcolor: '#000000', color: 'white', opacity: 0.8
        }}>
            <Container sx={{ my: 1, display: 'flex' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            spacing={2}
                            sx={{ height: 120 }}
                        >
                            <Grid item sx={{ display: 'flex' }}>
                                {/* Facebook Icon */}
                                <Box component="a" onClick={() => handlePageChange("https://www.facebook.com/datap/")} sx={{ ...iconStyle, ...facebookIconStyle }}>
                                    <FacebookIcon />
                                </Box>

                                {/* WhatsApp Icon */}
                                <Box component="a" onClick={handleWhatsAppClick} sx={{ ...iconStyle, ...whatsappIconStyle }}>
                                    <WhatsAppIcon />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Copyright />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h6" marked="center" gutterBottom>
                            Legal
                        </Typography>
                        <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                            <Box component="li" sx={{ py: 0.5 }}>
                                <Link href="/terms">Terms</Link>
                            </Box>
                            <Box component="li" sx={{ py: 0.5 }}>
                                <Link href="/privacy">Privacy</Link>
                            </Box>
                        </Box>
                    </Grid> */}
                    {/* <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h6" marked="center" gutterBottom>
                            Language
                        </Typography>
                        <TextField
                            select
                            size="medium"
                            variant="standard"
                            SelectProps={{
                                native: true,
                            }}
                            sx={{ mt: 1, width: 150 }}
                        >
                            {LANGUAGES.map((language) => (
                                <option value={language.code} key={language.code}>
                                    {language.name}
                                </option>
                            ))}
                        </TextField>
                    </Grid> */}
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography
                            variant="caption"
                            align="center"
                            sx={{
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 'auto',
                                marginBottom: 'auto',
                            }}
                        >
                            Data Plus S.A.R.L @Copyright All Right Reserved
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}
