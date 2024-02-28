// NetworkInfrastructureService.js
import React from 'react';
import { Typography, Box as MuiBox, Button } from '@mui/material';
import { TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { NetworkInfrastructureServiceData } from '../../data/NetworkInfrastructureServiceData';
import Container from '../../components/Container';
import Box from '../../components/Box';

const NetworkInfrastructureServiceView = () => {
    return (
        <>
            <Container >
                <Box >
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
                    <MuiBox sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleWhatsApp(NetworkInfrastructureServiceData.whatsappMessage)}
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

const NetworkInfrastructureService = () => {
    return <NetworkInfrastructureServiceView />;
};

export default NetworkInfrastructureService;
