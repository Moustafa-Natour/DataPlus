// NetworkSolutions.js
import React from 'react';
import { Typography, Box as MuiBox, Button } from '@mui/material';
import { TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { NetworkSolutionsData } from '../../data/NetworkSolutionsData';
import Container from '../../components/Container';
import Box from '../../components/Box';

const NetworkSolutionsView = () => {
    return (
        <>
            <Container>
                <Box >
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
                    <MuiBox sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleWhatsApp(NetworkSolutionsData.whatsappMessage)}
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

const NetworkSolutions = () => {
    return <NetworkSolutionsView />;
};

export default NetworkSolutions;
