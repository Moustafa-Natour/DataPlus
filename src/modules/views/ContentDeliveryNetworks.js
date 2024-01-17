import React from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../utils/StyleSx';
import { handleWhatsApp } from '../utils/ComonFunc';

const ContentDeliveryNetworksView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Welcome to Data Plus Content Delivery Networks
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Accelerate your content delivery with Data Plus Content Delivery Networks — a secure, reliable, and high-speed service designed to optimize the delivery of your digital content, ensuring a fast and seamless user experience from anywhere in the world.
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Why Choose Data Plus Content Delivery Networks?
                    </Typography>
                    <ul>
                        <li><strong>Fast and Reliable:</strong> Deliver your content at lightning speed, reducing loading times and improving user satisfaction.</li>
                        <li><strong>Global Reach:</strong> Ensure your content reaches audiences worldwide with our strategically located delivery networks.</li>
                        <li><strong>Security:</strong> Protect your content with advanced security measures, safeguarding against potential threats and unauthorized access.</li>
                        <li><strong>Scalability:</strong> Scale your content delivery resources as your audience grows, ensuring consistent performance.</li>
                    </ul>
                    <Typography sx={TypographyStyle}>
                        Whether you are a content provider, an e-commerce platform, or a media organization, Data Plus Content Delivery Networks is tailored to optimize your content delivery strategy and enhance the overall user experience.
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus Content Delivery Networks')} color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const ContentDeliveryNetworks = () => {
    return <ContentDeliveryNetworksView />;
};

export default ContentDeliveryNetworks;
