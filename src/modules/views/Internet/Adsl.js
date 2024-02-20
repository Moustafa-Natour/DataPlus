import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { Description, Title } from '../../data/AdslData';
const AdslView = () => {
    return (
        <>
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" sx={TypographyHeaderSx}>
                        {Title.title1}
                    </Typography>
                    <Box sx={{ maxWidth: '800px', margin: 'auto', my: 3 }}>
                        <Typography variant="body1" sx={TypographyStyle}>
                            {Description.description1}
                        </Typography>
                    </Box>
                    <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                        <Typography variant="h2" sx={TypographyHeaderSx}>
                            {Title.title2}
                        </Typography>
                        <Typography variant="body1" sx={TypographyStyle}>
                            {Description.description2}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

const Adsl = () => {
    return (
        <>
            <AdslView />
        </>
    );
};

export default Adsl;
