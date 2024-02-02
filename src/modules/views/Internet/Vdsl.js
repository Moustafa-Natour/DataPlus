// VdslView.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AppAppBar from '../AppBar/AppAppBar';
import AppFooter from '../AppBar/AppFooter';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { VdslData } from '../../data/VdslData';

const VdslView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" sx={TypographyHeaderSx}>
                        {VdslData.title}
                    </Typography>
                    {VdslData.paragraphs.map((paragraph, index) => (
                        <Box key={index} sx={{ maxWidth: '1000px', margin: 'auto' }}>
                            <Typography variant="body1" sx={TypographyStyle}>
                                {paragraph.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const Vdsl = () => {
    return <VdslView />;
};

export default Vdsl;