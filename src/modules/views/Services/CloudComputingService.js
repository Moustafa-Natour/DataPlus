import React from 'react';
import { Typography, Box as MuiBox, Button } from '@mui/material';
import { TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { Title, Description } from '../../data/CloudComputingServiceData';
import Container from '../../components/Container';
import Box from '../../components/Box';

const CloudComputingServiceView = () => {
    return (
        <>
            <Container >
                <Box>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        {Title.title}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {Description.mainDescription}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {Description.whyChoose}
                    </Typography>
                    <ul>
                        {Description.bulletPoints.map((point, index) => (
                            <li key={index}>
                                <strong>{point.title}</strong>: {point.description}
                            </li>
                        ))}
                    </ul>
                    <Typography sx={TypographyStyle}>
                        {Description.additionalDescription}
                    </Typography>
                    <MuiBox sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus Cloud Computing Service')}
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

const CloudComputingService = () => {
    return <CloudComputingServiceView />;
};

export default CloudComputingService;
