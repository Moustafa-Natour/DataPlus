import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { WebHostingData } from '../../data/WebHostingData';

const WebHostingView = () => {
    return (
        <>
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        {WebHostingData.title}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {WebHostingData.description}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Why Choose {WebHostingData.title}?
                    </Typography>
                    <ul>
                        {WebHostingData.reasonsToChoose.map((reason, index) => (
                            <li key={index}>
                                <strong>{reason.title}: </strong>
                                {reason.description}
                            </li>
                        ))}
                    </ul>
                    <Typography sx={TypographyStyle}>
                        {WebHostingData.additionalInformation}
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp(WebHostingData.buttonMessage)} color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

const WebHosting = () => {
    return <WebHostingView />;
};

export default WebHosting;
