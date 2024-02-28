import React from 'react';
import { Typography, Box as MuiBox, Button } from '@mui/material';
import { TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { ContentDeliveryNetworksData } from '../../data/ContentDeliveryNetworksData';
import Container from '../../components/Container';
import Box from '../../components/Box';

const ContentDeliveryNetworksView = () => {
    return (
        <>
            <Container >
                <Box >
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        {ContentDeliveryNetworksData.title}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {ContentDeliveryNetworksData.mainDescription}
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        {ContentDeliveryNetworksData.whyChoose}
                    </Typography>
                    <ul>
                        {ContentDeliveryNetworksData.bulletPoints.map((point, index) => (
                            <li key={index}>
                                <strong>{point.title}</strong>: {point.description}
                            </li>
                        ))}
                    </ul>
                    <Typography sx={TypographyStyle}>
                        {ContentDeliveryNetworksData.additionalDescription}
                    </Typography>
                    <MuiBox sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus Content Delivery Networks')}
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

const ContentDeliveryNetworks = () => {
    return <ContentDeliveryNetworksView />;
};

export default ContentDeliveryNetworks;