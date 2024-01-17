import React from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../utils/StyleSx';
import { handleWhatsApp } from '../utils/ComonFunc';

const TechnicalSupportView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Welcome to Data Plus Technical Support
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Elevate your technical capabilities with Data Plus Technical Support — a secure, reliable, and responsive service designed to provide you with the assistance and resources you need for seamless internet access from anywhere in the world.
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Why Choose Data Plus Technical Support?
                    </Typography>
                    <ul>
                        <li><strong>Expert Assistance:</strong> Access expert technical support to resolve issues and optimize your internet connectivity.</li>
                        <li><strong>Reliability:</strong> Rely on our responsive support team to address technical challenges promptly and efficiently.</li>
                        <li><strong>Customized Solutions:</strong> Receive tailored solutions to meet your specific technical requirements and ensure optimal performance.</li>
                        <li><strong>Continuous Improvement:</strong> Stay ahead with regular updates, maintenance, and improvements to enhance your technical infrastructure.</li>
                    </ul>
                    <Typography sx={TypographyStyle}>
                        Whether you are an individual user, a small business, or an enterprise with complex technical needs, Data Plus Technical Support is dedicated to providing you with the support required to navigate the digital landscape with confidence.
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus Technical Support')} color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const TechnicalSupport = () => {
    return <TechnicalSupportView />;
};

export default TechnicalSupport;
