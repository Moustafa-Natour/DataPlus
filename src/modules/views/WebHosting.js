import React from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../utils/StyleSx';
import { handleWhatsApp } from '../utils/ComonFunc';

const WebHostingView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Welcome to Data Plus Web Hosting
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Establish your online presence with Data Plus Web Hosting — a secure, reliable, and high-speed web hosting service designed to make your website accessible from anywhere in the world.
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Why Choose Data Plus Web Hosting?
                    </Typography>
                    <ul>
                        <li><strong>Reliable Hosting:</strong> Enjoy a reliable hosting service that ensures your website is always accessible to visitors.</li>
                        <li><strong>Security:</strong> Benefit from advanced security measures to safeguard your website from potential threats and vulnerabilities.</li>
                        <li><strong>High-Speed Performance:</strong> Experience fast loading times and optimal performance for your website visitors.</li>
                        <li><strong>Scalability:</strong> Easily scale your web hosting resources as your website grows, ensuring consistent performance.</li>
                    </ul>
                    <Typography sx={TypographyStyle}>
                        Whether you are an individual with a personal website, a small business, or an enterprise with extensive web hosting needs, Data Plus Web Hosting is tailored to provide you with the hosting solutions necessary for a successful online presence.
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus Web Hosting')} color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const WebHosting = () => {
    return <WebHostingView />;
};

export default WebHosting;
