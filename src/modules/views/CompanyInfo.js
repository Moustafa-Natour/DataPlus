import React from 'react';
import { Typography, Box, Container, Card, CardMedia } from '@mui/material';

const CompanyInfo = () => {
    return (
        <Container>
            <Card>
                <Box sx={{ my: 2, mx: 2 }}>
                    <CardMedia
                        component="video"
                        playsInline
                        autoPlay
                        muted
                        loop
                        height="300"
                        src="/assets/videos/StoreVideo.mp4"
                        alt="Company Video"
                    />
                </Box>

                <Typography variant="h1" component="h1">
                    DATA PLUS S.A.R.L
                </Typography>

                <Typography variant="body2" align='center' component="body2" sx={{ fontSize: { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }, letterSpacing: 1, lineHeight: 1.5, my: 2, textAlign: 'left' }}>
                    Serving the best of the internet Since 2016 for all your business needs and for all your personal needs.
                    We offer a seamless and efficient experience with bundle addons for your convenience.
                    Gaming and Streaming at your fingertips. With the gaming pool addon to your bundle
                    Real Ip Adress for your convenience and 24/7 support.
                    Free night from 12am to 6am enjoy unlimited data downlaod and uplaod with Free night addon for your convenience
                </Typography>
            </Card>
        </Container>
    );
};

export default CompanyInfo;
