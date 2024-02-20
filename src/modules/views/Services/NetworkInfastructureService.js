// NetworkInfrastructureService.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { NetworkInfrastructureServiceData } from '../../data/NetworkInfrastructureServiceData';

const NetworkInfrastructureServiceView = () => {
    return (
        <>
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        {NetworkInfrastructureServiceData.title}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {NetworkInfrastructureServiceData.mainDescription}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {NetworkInfrastructureServiceData.whyChoose}
                    </Typography>
                    <ul>
                        {NetworkInfrastructureServiceData.bulletPoints.map((point, index) => (
                            <li key={index}>
                                <Typography variant="body1" sx={TypographyStyle}>
                                    <strong>{point.title}:</strong> {point.description}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                    <Typography sx={TypographyStyle}>
                        {NetworkInfrastructureServiceData.additionalDescription}
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleWhatsApp(NetworkInfrastructureServiceData.whatsappMessage)}
                            color="primary"
                            size="large"
                            sx={{ mt: 3 }}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

const NetworkInfrastructureService = () => {
    return <NetworkInfrastructureServiceView />;
};

export default NetworkInfrastructureService;
