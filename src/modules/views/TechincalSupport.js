// TechnicalSupportView.js
import React from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../utils/StyleSx';
import { handleWhatsApp } from '../utils/ComonFunc';
import { TechnicalSupportData } from '../data/TechnicalSupportData';

const TechnicalSupportView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
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
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleWhatsApp(TechnicalSupportData.whatsappMessage)}
                            color="primary"
                            size="large"
                            sx={{ mt: 3 }}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

export default TechnicalSupportView;
