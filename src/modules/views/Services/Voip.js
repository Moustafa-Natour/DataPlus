// VoipView.js
import React from 'react';
import { Typography, Box as MuiBox, Button } from '@mui/material';
import { TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { VoipData } from '../../data/VoipData';
import Container from '../../components/Container';
import Box from '../../components/Box';

const VoipView = () => {
    return (
        <>
            <Container>
                <Box>
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
                    <MuiBox sx={{ textAlign: 'center' }}>
                        <Button variant="contained" onClick={() => handleWhatsApp(VoipData.buttonMessage)} color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </MuiBox>
                </Box>
            </Container>
        </>
    );
};

const Voip = () => {
    return <VoipView />;
};

export default Voip;
