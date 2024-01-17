import React from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../utils/StyleSx';
import { handleWhatsApp } from '../utils/ComonFunc';

const VoipView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Welcome to Data Plus Voice Over IP
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Transform your communication experience with Data Plus Voice Over IP — a secure, reliable, and high-performance service that enables crystal-clear voice communication over the internet from anywhere in the world.
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Why Choose Data Plus Voice Over IP?
                    </Typography>
                    <ul>
                        <li><strong>Clear and Reliable Calls:</strong> Enjoy high-quality voice calls with clear audio, ensuring a seamless communication experience.</li>
                        <li><strong>Flexibility and Mobility:</strong> Stay connected wherever you are, as Data Plus VOIP allows you to make and receive calls from any device with an internet connection.</li>
                        <li><strong>Cost-Effective:</strong> Reduce communication costs significantly compared to traditional phone services, especially for international calls.</li>
                        <li><strong>Integrated Features:</strong> Benefit from additional features such as video calls, conferencing, and voicemail, enhancing your communication capabilities.</li>
                    </ul>
                    <Typography sx={TypographyStyle}>
                        Whether you are a small business, a remote team, or an individual user, Data Plus Voice Over IP is designed to meet your communication needs with efficiency and reliability.
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus VOIP Service')} color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const Voip = () => {
    return <VoipView />;
};

export default Voip;
