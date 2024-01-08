import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';

const VdslView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={{ textAlign: 'center', my: 4 }}>
                <Typography variant="h1" sx={{ fontSize: { xs: 26, md: 38, lg: 50, xl: 62 }, letterSpacing: 1, borderBottom: ' 4mm ridge #000000' }}>
                    Elevate Your Internet Experience with VDSL
                </Typography>
            </Container>
            <Container sx={{ my: 4 }}>
                <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                    <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8 }}>
                        VDSL, or Very High bit rate Digital Subscriber Line, stands at the forefront of broadband technology, delivering high-speed Internet over "short distance" copper phone lines with speeds reaching an impressive 50 Mbps. The technology is revolutionizing connectivity by strategically installing network equipment near your neighborhood's phone cabinet and connecting it back to the Central Office via Fiber Optic Cables. This innovative approach significantly shortens the copper part of the phone line to distances ranging between 100 and 400 meters, enabling your VDSL modem to achieve unprecedented speeds.
                    </Typography>
                </Box>
            </Container>
            <Container sx={{ my: 4 }}>
                <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                    <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8 }}>
                        VDSL brings an unparalleled Internet experience, allowing everyone at home to download files and game updates in record time. Whether you're streaming high-quality videos and movies, playing popular online games, connecting and chatting with family and friends while seeing them, sending and receiving emails, or simply browsing the Internet, VDSL empowers you to seamlessly engage in multiple online activities simultaneously. Enjoy a fast, reliable, and uninterrupted Internet connection that enhances your digital lifestyle.
                    </Typography>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const Vdsl = () => {
    return <VdslView />;
};

export default Vdsl;
