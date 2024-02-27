// VdslView.js
import React from 'react';
import Container from '../../components/Container';
import Box from '../../components/Box';
import { Typography, Box as MuiBox } from '@mui/material';
import { TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { VdslData } from '../../data/VdslData';

const VdslView = () => {
    return (
        <>
            <Container>
                <Box >
                    <Typography variant="h1" sx={TypographyHeaderSx}>
                        {VdslData.title}
                    </Typography>
                    {VdslData.paragraphs.map((paragraph, index) => (
                        <MuiBox key={index} sx={{ maxWidth: '1000px', margin: 'auto' }}>
                            <Typography variant="body1" sx={TypographyStyle}>
                                {paragraph.text}
                            </Typography>
                        </MuiBox>
                    ))}
                </Box>
            </Container>
        </>
    );
};

const Vdsl = () => {
    return <VdslView />;
};

export default Vdsl;
