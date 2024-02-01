// NetworkSolutions.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import AppAppBar from '../AppBar/AppAppBar';
import AppFooter from '../AppBar/AppFooter';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { NetworkSolutionsData } from '../../data/NetworkSolutionsData';

const NetworkSolutionsView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        {NetworkSolutionsData.title}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {NetworkSolutionsData.mainDescription}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {NetworkSolutionsData.whyChoose}
                    </Typography>
                    <ul>
                        {NetworkSolutionsData.bulletPoints.map((point, index) => (
                            <li key={index}>
                                <Typography variant="body1" sx={TypographyStyle}>
                                    <strong>{point.title}:</strong> {point.description}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                    <Typography sx={TypographyStyle}>
                        {NetworkSolutionsData.additionalDescription}
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleWhatsApp(NetworkSolutionsData.whatsappMessage)}
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

const NetworkSolutions = () => {
    return <NetworkSolutionsView />;
};

export default NetworkSolutions;
