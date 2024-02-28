// Microwave.js
import React from 'react';
import Container from '../../components/Container'
import Box from '../../components/Box'
import { Typography, Box as MuiBox } from '@mui/material';
import { TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { MicrowaveData } from '../../data/MicrowaveData';

const MicrowaveView = () => {
    return (
        <>
            <Container>
                <Box >
                    <Typography variant="h1" sx={TypographyHeaderSx}>
                        {MicrowaveData.title}
                    </Typography>
                    <MuiBox sx={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Typography variant="body1" sx={TypographyStyle}>
                            {MicrowaveData.description}
                        </Typography>
                    </MuiBox>
                    <MuiBox sx={{ margin: 'auto' }}>
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
                    </MuiBox>
                </Box>
            </Container>
        </>
    );
};

const Microwave = () => {
    return <MicrowaveView />;
};

export default Microwave;
