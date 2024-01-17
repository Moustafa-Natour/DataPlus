import React from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../utils/StyleSx';
import { handleWhatsApp } from '../utils/ComonFunc';

const VpnView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Welcome to Data Plus VPN
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Elevate your online experience with Data Plus VPN — a state-of-the-art, secure, and high-speed Virtual Private Network designed to provide you with unrestricted access to the internet, regardless of your location.
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Why Choose Data Plus VPN?
                    </Typography>
                    <ul>
                        <li><strong>Cutting-Edge Security:</strong> Our VPN service employs the latest encryption technologies to ensure your online activities are private and secure.</li>
                        <li><strong>High-Speed Connectivity:</strong> Enjoy seamless browsing, streaming, and communication with our high-speed VPN servers strategically located worldwide.</li>
                        <li><strong>Global Accessibility:</strong> Connect to the internet from anywhere in the world, bypassing geo-restrictions and ensuring your freedom online.</li>
                        <li><strong>Corporate Solutions:</strong> For businesses, our VPN offers a unique solution to securely connect all your branches under one network, facilitating streamlined stock inventory control for efficient business operations.</li>
                    </ul>
                    <Typography sx={TypographyStyle}>
                        Experience the confidence of browsing and working online without compromising on privacy. Whether you're an individual user or a corporate entity, Data Plus VPN is tailored to meet your specific needs.
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus VPN Service')} color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const Vpn = () => {
    return <VpnView />;
};

export default Vpn;
