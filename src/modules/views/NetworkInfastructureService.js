import React from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../utils/StyleSx';
import { handleWhatsApp } from '../utils/ComonFunc';

const NetworkInfrastructureServiceView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Welcome to Data Plus Network Infrastructure Services
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Power your connectivity with Data Plus Network Infrastructure Services — a secure, reliable, and high-performance solution designed to enhance your network capabilities and enable seamless access to the internet from anywhere.
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Why Choose Data Plus Network Infrastructure Services?
                    </Typography>
                    <ul>
                        <li><strong> Robust Connectivity: </strong>Ensure uninterrupted and reliable connectivity with our state-of-the-art network infrastructure services.</li>
                        <li><strong>Scalability:</strong> Scale your network resources easily to accommodate the evolving needs of your business, ensuring optimal performance.</li>
                        <li><strong>Security:</strong> Implement advanced security measures to safeguard your network from potential threats and vulnerabilities.</li>
                        <li><strong>Efficient Data Transfer:</strong> Streamline data transfer within your organization, enhancing communication and collaboration among your teams.</li>
                    </ul>
                    <Typography sx={TypographyStyle}>
                        Whether you are a small business, a growing enterprise, or an organization with complex networking requirements, Data Plus Network Infrastructure Services is tailored to provide you with a reliable and secure foundation for your digital operations.
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus Network Infrastructure Services')} color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const NetworkInfrastructureService = () => {
    return <NetworkInfrastructureServiceView />;
};

export default NetworkInfrastructureService;
