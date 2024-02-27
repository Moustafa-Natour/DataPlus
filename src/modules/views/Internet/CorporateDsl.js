// CorporateDsl.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import Container from '../../components/Container';
import { BoxSx, TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { CorporateDslData } from '../../data/CorporateDslData';

const CorporateDslView = () => {
    return (
        <>
            <Container>
                <Box sx={BoxSx}>
                    <Typography variant="h1" sx={TypographyHeaderSx}>
                        {CorporateDslData.title}
                    </Typography>

                    <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                        <Typography variant="body1" sx={TypographyStyle}>
                            {CorporateDslData.description1}
                        </Typography>
                    </Box>

                    <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                        <Typography variant="body1" sx={TypographyStyle}>
                            {CorporateDslData.description2}
                        </Typography>
                    </Box>

                    <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                        <Typography variant="h2" sx={TypographyHeaderSx}>
                            {CorporateDslData.keyFeaturesTitle}
                        </Typography>
                        <ul>
                            {CorporateDslData.keyFeaturesList.map((feature, index) => (
                                <li key={index}>
                                    <Typography variant="body1" sx={TypographyStyle}>
                                        <strong>{feature.title}:</strong> {feature.description}
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

const CorporateDsl = () => {
    return <CorporateDslView />;
};

export default CorporateDsl;
