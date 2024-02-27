import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { BoxSx, TypographyHeaderSx, TypographyStyle } from '../../utils/StyleSx';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { ContentDeliveryNetworksData } from '../../data/ContentDeliveryNetworksData';
import Container from '../../components/Container';

const ContentDeliveryNetworksView = () => {
    return (
        <>
            <Container >
                <Box sx={BoxSx}>
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
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus Content Delivery Networks')}
                            color="primary"
                            size="large"
                            sx={{ mt: 3 }}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

const ContentDeliveryNetworks = () => {
    return <ContentDeliveryNetworksView />;
};

export default ContentDeliveryNetworks;