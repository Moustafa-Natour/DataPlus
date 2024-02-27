import React from 'react';
import { Typography } from '@mui/material';
import { Box as MuiBox } from '@mui/material';
import Container from '../../components/Container';
import Box from '../../components/Box';
import { TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { Description, Title } from '../../data/AdslData';
const AdslView = () => {
    return (
        <>
            <Container>
                <Box>
                    <Typography variant="h1" sx={TypographyHeaderSx}>
                        {Title.title1}
                    </Typography>
                    <MuiBox sx={{ maxWidth: '800px', margin: 'auto', my: 3 }}>
                        <Typography variant="body1" sx={TypographyStyle}>
                            {Description.description1}
                        </Typography>
                    </MuiBox>
                    <MuiBox sx={{ maxWidth: '800px', margin: 'auto' }}>
                        <Typography variant="h2" sx={TypographyHeaderSx}>
                            {Title.title2}
                        </Typography>
                        <Typography variant="body1" sx={TypographyStyle}>
                            {Description.description2}
                        </Typography>
                    </MuiBox>
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
