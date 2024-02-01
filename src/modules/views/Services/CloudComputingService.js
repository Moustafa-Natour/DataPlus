import React from 'react';
import AppAppBar from '../AppBar/AppAppBar';
import AppFooter from '../AppBar/AppFooter';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { Title, Description } from '../../data/CloudComputingServiceData';

const CloudComputingServiceView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        {Title.title}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {Description.mainDescription}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {Description.whyChoose}
                    </Typography>
                    <ul>
                        {Description.bulletPoints.map((point, index) => (
                            <li key={index}>
                                <strong>{point.title}</strong>: {point.description}
                            </li>
                        ))}
                    </ul>
                    <Typography sx={TypographyStyle}>
                        {Description.additionalDescription}
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus Cloud Computing Service')}
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

const CloudComputingService = () => {
    return <CloudComputingServiceView />;
};

export default CloudComputingService;
