import React from 'react';
import { Typography, Box, Container, Card, CardMedia, CardContent } from '@mui/material';
import AppAppBar from './AppAppBar'
import AppFooter from './AppFooter'
import { BoxSx, ContainerSx } from '../utils/StyleSx';

let CompanyInfo = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" align="center" sx={{ borderBottom: ' 4mm ridge #000000', mb: 4 }}>
                        Data Plus S.A.R.L
                    </Typography>
                    <Card>
                        <CardMedia
                            component="video"
                            playsInline
                            autoPlay
                            muted
                            loop
                            height="100%"
                            objectFit="cover"
                            src="/assets/videos/aboutus.mp4"
                            alt="Company Video"
                        />
                    </Card>
                    <CardContent>
                        <Typography
                            variant="body2"
                            align="justify"
                            component="body2"
                            sx={{
                                fontSize: { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 },
                                letterSpacing: 1,
                                lineHeight: 1.5,
                            }}
                        >
                            Since its inception in 2016, Data Plus S.A.R.L has been at the forefront of delivering premium internet services tailored to both personal and business needs. Founded by Mr. Mahmoud Koubeisi, our commitment is to provide unparalleled internet connectivity to our valued customers.

                            Our team of seasoned professionals stands ready to ensure that you receive the best-in-class services. Committed to compliance with global and Lebanese laws and regulations, we operate with integrity and transparency.

                            Covering all of Beirut and Lebanon, we invite you to contact us for a quote tailored to your internet installation needs. Experience seamless connectivity with our bundle add-ons, offering convenience and flexibility.

                            Unlock the world of gaming and streaming at your fingertips with our gaming pool add-on. Benefit from a real IP address for your convenience, and enjoy 24/7 support from our dedicated team.

                            As part of our commitment to customer satisfaction, we offer a free night addon from 12 am to 6 am, allowing unlimited data download and upload during these hours. Experience the Data Plus difference today.
                        </Typography>
                    </CardContent>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
}

const AboutUs = () => {
    return (
        <>
            <CompanyInfo />
        </>
    )
}

export default AboutUs