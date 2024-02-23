import React, { Suspense } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import { handleWhatsApp, handlePageChange } from '../../utils/ComonFunc';
import { AppFooterSx, whatsappIconStyle, facebookIconStyle, instagramIconStyle, telegramIconStyle, iconStyle, rightLink } from "../../utils/StyleSx";

// Lazy load icons
const LazyLoadedWhatsAppIcon = React.lazy(() => import('@mui/icons-material/WhatsApp'));
const LazyLoadedFacebookIcon = React.lazy(() => import('@mui/icons-material/Facebook'));
const LazyLoadedInstagramIcon = React.lazy(() => import('@mui/icons-material/Instagram'));
const LazyLoadedTelegramIcon = React.lazy(() => import('@mui/icons-material/Telegram'));

function Copyright() {
    return (
        <React.Fragment>
            {'© 2016 '}
            <Link color="inherit" href="/" sx={{ textDecoration: 'none', color: '#fff' }}>
                All Right Reserved
            </Link>
        </React.Fragment>
    );
}

function AppFooter() {
    return (
        <Typography id="AppFooter" component="footer" sx={AppFooterSx}>
            <Container sx={{ my: 1, display: 'flex' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{ height: 110 }}>
                            <Grid item sx={{ display: 'flex' }}>
                                <Box component="a" onClick={() => handlePageChange("Fb")} sx={{ ...iconStyle, ...facebookIconStyle }}>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <LazyLoadedFacebookIcon />
                                    </Suspense>
                                </Box>
                                <Box component="a" onClick={handleWhatsApp} sx={{ ...iconStyle, ...whatsappIconStyle }}>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <LazyLoadedWhatsAppIcon />
                                    </Suspense>
                                </Box>
                                <Box component="a" onClick={() => handlePageChange("Ig")} sx={{ ...iconStyle, ...instagramIconStyle }}>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <LazyLoadedInstagramIcon />
                                    </Suspense>
                                </Box>
                                <Box component="a" onClick={() => handlePageChange("Telegram")} sx={{ ...iconStyle, ...telegramIconStyle }}>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <LazyLoadedTelegramIcon />
                                    </Suspense>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Copyright />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex' }} justifyContent="center" alignItems="center">
                                <Link variant="a" underline="none" href="/" sx={{ ...rightLink, justifyContent: "center", alignItems: "center", textAlign: 'center' }}>
                                    <img
                                        src="assets/logo/Dplusfooter.svg"
                                        alt="DATA PLUS"
                                        width="200"
                                        height="40"
                                        style={{
                                            marginTop: 2,
                                            objectFit: 'cover',
                                            display: 'block',
                                            overflow: 'hidden',
                                        }}
                                    />
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}

export default AppFooter;
