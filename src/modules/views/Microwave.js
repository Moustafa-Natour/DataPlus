// Microwave.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../utils/StyleSx';
import { MicrowaveData } from '../data/MicrowaveData';

const MicrowaveView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={{ ...ContainerSx }}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" sx={TypographyHeaderSx}>
                        {MicrowaveData.title}
                    </Typography>
                    <Box sx={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Typography variant="body1" sx={TypographyStyle}>
                            {MicrowaveData.description}
                        </Typography>
                    </Box>
                    <Box sx={{ margin: 'auto' }}>
                        <Typography variant="h2" sx={TypographyHeaderSx}>
                            {MicrowaveData.advantagesTitle}
                        </Typography>
                        <ul>
                            {MicrowaveData.advantagesList.map((advantage, index) => (
                                <li key={index}>
                                    <Typography variant="body1" sx={TypographyStyle}>
                                        <strong>{advantage.title}:</strong> {advantage.description}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const Microwave = () => {
    return <MicrowaveView />;
};

export default Microwave;
