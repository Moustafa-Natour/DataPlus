// Microwave.js
import React from 'react';
import Container from '../../components/Container'
import { Typography, Box } from '@mui/material';
import { BoxSx, TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { MicrowaveData } from '../../data/MicrowaveData';

const MicrowaveView = () => {
    return (
        <>
            <Container>
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
        </>
    );
};

const Microwave = () => {
    return <MicrowaveView />;
};

export default Microwave;
