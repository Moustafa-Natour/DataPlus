import React from 'react';
import { Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
import { BoxSx, TypographyHeaderSx } from '../../utils/StyleSx';
import { Description, Title } from '../../data/AboutUsData';
import Container from '../../components/Container';
import aboutUsVideo from '../../assets/videos/aboutus.mp4';

let CompanyInfo = () => {
    return (
        <>
            <Container >
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" align="center" sx={TypographyHeaderSx}>
                        {Title}
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
                            src={aboutUsVideo}
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
                            {Description}
                        </Typography>
                    </CardContent>
                </Box>
            </Container>
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