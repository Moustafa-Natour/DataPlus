import React from 'react';
import { Typography, Box as MuiBox, Button } from '@mui/material';
import { TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { WebHostingData } from '../../data/WebHostingData';
import Container from '../../components/Container';
import Box from '../../components/Box';

const WebHostingView = () => {
    return (
        <>
            <Container>
                <Box >
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
                    <MuiBox sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp(WebHostingData.buttonMessage)} color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </MuiBox>
                </Box>
            </Container>
        </>
    );
};

const WebHosting = () => {
    return <WebHostingView />;
};

export default WebHosting;
