// VoipView.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../utils/StyleSx';
import { handleWhatsApp } from '../utils/ComonFunc';
import { VoipData } from '../data/VoipData';

const VoipView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        {VoipData.title}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {VoipData.description}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Why Choose {VoipData.title}?
                    </Typography>
                    <ul>
                        {VoipData.reasonsToChoose.map((reason, index) => (
                            <li key={index}>
                                <strong>{reason.title}: </strong>
                                {reason.description}
                            </li>
                        ))}
                    </ul>
                    <Typography sx={TypographyStyle}>
                        {VoipData.additionalInformation}
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp(VoipData.buttonMessage)} color="primary" size="large" sx={{ mt: 3 }}>
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
