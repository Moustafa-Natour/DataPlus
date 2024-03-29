// DomainRegister.js
import React from 'react';
import { Typography, Box as MuiBox, Button } from '@mui/material';
import Container from '../../components/Container';
import Box from '../../components/Box';
import { TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { DomainRegisterData } from '../../data/DomainRegisterData';

const DomainRegisterView = () => {
    return (
        <>
            <Container>
                <Box>
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
                    <MuiBox sx={{ textAlign: 'center' }}>
                        <Button
                            onClick={() => handleWhatsApp(DomainRegisterData.whatsappMessage)}
                            variant="contained"
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

const DomainRegister = () => {
    return <DomainRegisterView />;
};

export default DomainRegister;
