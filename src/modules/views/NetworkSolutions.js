import React from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../utils/StyleSx';
import { handleWhatsApp } from '../utils/ComonFunc';

const NetworkSolutionsView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Welcome to Data Plus Network Solutions
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Unlock the full potential of your network with Data Plus Network Solutions — a secure, reliable, and high-performance service designed to address your unique networking challenges and ensure seamless internet access from anywhere in the world.
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Why Choose Data Plus Network Solutions?
                    </Typography>
                    <ul>
                        <li><strong>Customized Solutions:</strong> Tailored network solutions to meet the specific requirements of your business or organization.</li>
                        <li><strong>Reliability:</strong> Ensure uninterrupted connectivity with our reliable and resilient network infrastructure.</li>
                        <li><strong>Scalability:</strong> Scale your network resources easily to accommodate the evolving needs of your business.</li>
                        <li><strong>Security:</strong> Implement advanced security measures to protect your network from potential threats and vulnerabilities.</li>
                    </ul>
                    <Typography sx={TypographyStyle}>
                        Whether you are a small business, an enterprise, or an organization with complex networking needs, Data Plus Network Solutions is committed to providing you with the solutions necessary to optimize your network performance.
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus Network Solutions')} color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const NetworkSolutions = () => {
    return <NetworkSolutionsView />;
};

export default NetworkSolutions;
