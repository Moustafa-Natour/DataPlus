// DomainRegister.js
import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Container from '../../components/Container';
import { BoxSx, TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { DomainRegisterData } from '../../data/DomainRegisterData';

const DomainRegisterView = () => {
    return (
        <>
            <Container>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        {DomainRegisterData.title}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {DomainRegisterData.mainDescription}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {DomainRegisterData.whyChoose}
                    </Typography>
                    <ul>
                        {DomainRegisterData.bulletPoints.map((point, index) => (
                            <li key={index}>
                                <Typography sx={TypographyStyle}>
                                    <strong>{point.title}:</strong> {point.description}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                    <Typography sx={TypographyStyle}>
                        {DomainRegisterData.additionalDescription}
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            onClick={() => handleWhatsApp(DomainRegisterData.whatsappMessage)}
                            variant="contained"
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

const DomainRegister = () => {
    return <DomainRegisterView />;
};

export default DomainRegister;
