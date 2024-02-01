import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { AppFooterSx, whatsappIconStyle, facebookIconStyle, instagramIconStyle, telegramIconStyle, iconStyle } from "../../utils/StyleSx";
import { handleWhatsApp, handlePageChange } from '../../utils/ComonFunc';

function Copyright() {
    return (
        <React.Fragment>
            {'© 2016 '}
            <Link color="inherit" href="/" sx={{ textDecoration: 'none', color: '#fff' }}>
                DATA PLUS
            </Link>
            {/* {' Since '} */}
            {/* {new Date().getFullYear()} */}
        </React.Fragment>
    );
}

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

export default function AppFooter() {
    return (
        <Typography id="AppFooter" component="footer" sx={AppFooterSx}>
            <Container sx={{ my: 1, display: 'flex' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{ height: 120 }}>
                            <Grid item sx={{ display: 'flex' }}>
                                <Box component="a" onClick={() => handlePageChange("Fb")} sx={{ ...iconStyle, ...facebookIconStyle }}>
                                    <FacebookIcon />
                                </Box>
                                <Box component="a" onClick={handleWhatsApp} sx={{ ...iconStyle, ...whatsappIconStyle }}>
                                    <WhatsAppIcon />
                                </Box>
                                <Box component="a" onClick={() => handlePageChange("Ig")} sx={{ ...iconStyle, ...instagramIconStyle }}>
                                    <InstagramIcon />
                                </Box>
                                <Box component="a" onClick={() => handlePageChange("Telegram")} sx={{ ...iconStyle, ...telegramIconStyle }}>
                                    <TelegramIcon />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Copyright />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="caption" align="center" sx={{ margin: 'auto' }}>
                                Data Plus S.A.R.L © All Right Reserved
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}
