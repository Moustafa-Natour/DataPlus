import React from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Box, Container, Typography, Grid, Card, CardMedia } from '@mui/material';

const SamaFlixView = () => {
    const tvChannels = getChannelImages();

    function getChannelImages() {
        const context = require.context('../assets/chanelimg', false, /\.(jpg|jpeg|png)$/);
        return context.keys().map(context);
    }

    return (
        <>
            <AppAppBar />
            <Container>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h1" sx={{ textAlign: 'center', fontSize: { xs: 26, md: 38, lg: 50, xl: 62 }, letterSpacing: 1, borderBottom: '4mm ridge #000000', color: '#333' }}>
                        SamaFlix
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', fontSize: 18, marginTop: 4, color: '#666' }}>
                        SAMA Flix is an IPTV platform distributed all over Lebanon. It includes TV Channels from different bouquets such as Sports, Documentary, News, and others from different languages. It includes also a Catch Up feature for live channels that allows going back in time up to 36 hours. This platform is distributed over the Internet and Intranets through different networks. Our company, DATA PLUS, is the authorized agent that resells this service, providing you with access to a wide range of entertainment options.
                    </Typography>
                    <Grid container spacing={4} mt={4}>
                        {tvChannels.map((channel, index) => (
                            <Grid item key={index + 1} xs={12} sm={6} md={4} lg={3}>
                                <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 8, overflow: 'hidden' }}>
                                    <CardMedia
                                        component="img"
                                        height={240} // Set a fixed height for uniformity
                                        image={channel}
                                        alt={`Channel ${index + 1}`}
                                        sx={{ objectFit: 'fill', width: '100%' }}
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const SamaFlix = () => {
    return (
        <>
            <SamaFlixView />
        </>
    );
};

export default SamaFlix;
