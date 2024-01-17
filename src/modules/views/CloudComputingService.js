import React from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../utils/StyleSx';
import { handleWhatsApp } from '../utils/ComonFunc';

const CloudComputingServiceView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Welcome to Data Plus Cloud Computing Service
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Elevate your business with Data Plus Cloud Computing Service — a secure, reliable, and high-performance cloud solution that enables you to harness the power of computing, storage, and applications from anywhere in the world.
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Why Choose Data Plus Cloud Computing Service?
                    </Typography>
                    <ul>
                        <li><strong>Scalability:</strong> Easily scale your computing resources up or down based on your business needs, ensuring optimal performance at all times.</li>
                        <li><strong>Flexibility:</strong> Access your applications and data from any device with an internet connection, providing flexibility for your workforce.</li>
                        <li><strong>Data Security:</strong> Benefit from robust security measures to protect your data, ensuring confidentiality and compliance with industry standards.</li>
                        <li><strong>Cost-Efficiency:</strong> Pay only for the resources you use, reducing upfront infrastructure costs and optimizing your IT budget.</li>
                    </ul>
                    <Typography sx={TypographyStyle}>
                        Whether you are a startup, an established enterprise, or an individual developer, Data Plus Cloud Computing Service is designed to provide you with the tools and infrastructure needed to innovate and succeed in the digital era.
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus Cloud Computing Service')} color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const CloudComputingService = () => {
    return <CloudComputingServiceView />;
};

export default CloudComputingService;
