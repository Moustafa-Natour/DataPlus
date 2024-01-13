import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { BoxSx, ContainerSx } from '../utils/StyleSx';
const AdslView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" sx={{ textAlign: 'center', fontSize: { xs: 36, md: 48, lg: 60, xl: 72 }, letterSpacing: 1, borderBottom: ' 4mm ridge #000000' }}>
                        Explore High-Speed ADSL Plans
                    </Typography>
                    <Box sx={{ maxWidth: '800px', margin: 'auto', my: 3 }}>
                        <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8 }}>
                            Elevate your online experience with Data Plus ADSL, a sophisticated broadband technology delivering high-speed Internet over your existing copper phone line. With speeds reaching up to 20Mbps, immerse yourself in a seamless online journey. From downloading large files to streaming high-quality videos and movies, enjoying music, engaging in online gaming, conducting video calls with loved ones, to effortlessly managing emails and browsing the Internet – ADSL empowers you to do it all simultaneously.
                        </Typography>
                    </Box>
                    <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                        <Typography variant="h2" sx={{ textAlign: 'center', fontSize: { xs: 30, md: 36, lg: 42, xl: 48 }, letterSpacing: 1, my: 2 }}>
                            Introducing Data Plus iPlan
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8 }}>
                            Elevate your online experience with Data Plus ADSL, a sophisticated broadband technology delivering high-speed Internet over your existing copper phone line. With speeds reaching up to 20Mbps, immerse yourself in a seamless online journey. From downloading large files to streaming high-quality videos and movies, enjoying music, engaging in online gaming, conducting video calls with loved ones, to effortlessly managing emails and browsing the Internet – ADSL empowers you to do it all simultaneously.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8 }}>
                            Introducing the Data Plus iPlan, a pinnacle of intelligent design tailored to meet diverse internet needs in today's dynamic environment. Our three iPlan packages cater to varying internet usage trends and family sizes, providing an open-speed internet experience with unlimited quota. Elevate your home entertainment with the option to add a TV subscription featuring Cablevision. The iPlan is a comprehensive, one-stop solution designed for your enjoyment and convenience.
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const Adsl = () => {
    return (
        <>
            <AdslView />
        </>
    );
};

export default Adsl;
