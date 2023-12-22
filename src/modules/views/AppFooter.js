import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

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
    backgroundColor: 'warning.main',
    mr: 1,
    '&:hover': {
        bgcolor: 'warning.dark',
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
const handlePageChange = () => {
    window.open("https://www.facebook.com/datap/", '_blank');
};
export default function AppFooter() {
    return (
        <Typography
            component="footer"
            sx={{ display: 'flex', bgcolor: 'secondary.light' }}
        >
            <Container sx={{ my: 2, display: 'flex' }}>
                <Grid container spacing={4} >
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid
                            container
                            direction="column"
                            alignItems='center'
                            justifyContent="center"
                            spacing={2}
                            sx={{ height: 120 }}
                        >
                            <Grid item sx={{ display: 'flex' }}>
                                <Box component="a" onClick={handlePageChange} sx={iconStyle}>
                                    <img
                                        src="https://mui.com/static/themes/onepirate/appFooterFacebook.png"
                                        alt="Facebook"
                                    />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Copyright />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
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
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
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
                    </Grid>
                    <Grid item >
                        <Typography variant="caption" sx={{ left: 'auto', right: 'auto', marginLeft: 'auto', marginRight: 'auto', padding: 2, alignItems: 'center', justifyContent: 'center' }}>
                            Data Plus S.A.R.L @Copyright All Right Reserved
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}