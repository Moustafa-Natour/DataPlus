// TechnicalSupportView.js
import React from 'react';
import { Typography, Box as MuiBox, Button } from '@mui/material';
import { TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { TechnicalSupportData } from '../../data/TechnicalSupportData';
import Container from '../../components/Container';
import Box from '../../components/Box';

const TechnicalSupportView = () => {
    return (
        <>
            <Container >
                <Box >
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        {TechnicalSupportData.title}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {TechnicalSupportData.mainDescription}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {TechnicalSupportData.whyChoose}
                    </Typography>
                    <ul>
                        {TechnicalSupportData.bulletPoints.map((point, index) => (
                            <li key={index}>
                                <Typography variant="body1" sx={TypographyStyle}>
                                    <strong>{point.title}:</strong> {point.description}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                    <Typography sx={TypographyStyle}>
                        {TechnicalSupportData.additionalDescription}
                    </Typography>
                    <MuiBox sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleWhatsApp(TechnicalSupportData.whatsappMessage)}
                            color="primary"
                            size="large"
                            sx={{ mt: 3 }}
                        >
                            Get Started
                        </Button>
                    </MuiBox>
                </Box>
            </Container>
        </>
    );
};

export default TechnicalSupportView;
