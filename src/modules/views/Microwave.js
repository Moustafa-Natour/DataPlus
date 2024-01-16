import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { BoxSx, ContainerSx, TypographyHeaderSx } from '../utils/StyleSx';

const MicrowaveView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={{ ...ContainerSx }}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" sx={TypographyHeaderSx}>
                        Unleash Connectivity with Microwave Technology
                    </Typography>
                    <Box sx={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Typography variant="body1" sx={{ mt: 2, fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8 }}>
                            Microwave technology revolutionizes internet connectivity by providing high-speed data transmission through the air using radio waves. As a leading internet service provider, Data Plus embraces microwave technology to deliver seamless, reliable, and high-performance internet services to our customers.
                        </Typography>
                    </Box>
                    <Box sx={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Typography variant="h2" sx={TypographyHeaderSx}>
                            Advantages of Microwave Internet:
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8 }}>
                            - High-Speed Connectivity: Microwave internet offers high-speed data transfer, making it ideal for activities such as streaming, online gaming, and large file downloads.
                            <br />
                            - Reliability: With minimal infrastructure requirements and resistance to physical obstacles, microwave technology ensures a reliable and consistent internet connection.
                            <br />
                            - Quick Deployment: Microwave links can be rapidly deployed, making it an efficient solution for areas with limited or no existing internet infrastructure.
                            <br />
                            - Scalability: Microwave technology allows for easy scalability to meet growing data demands, making it suitable for both residential and corporate needs.
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const Microwave = () => {
    return <MicrowaveView />;
};

export default Microwave;
