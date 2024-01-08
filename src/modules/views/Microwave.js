import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';

const MicrowaveView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={{ textAlign: 'center', my: 4 }}>
                <Typography variant="h1" sx={{ fontSize: { xs: 26, md: 38, lg: 50, xl: 62 }, letterSpacing: 1, borderBottom: ' 4mm ridge #000000' }}>
                    Unleash Connectivity with Microwave Technology
                </Typography>
            </Container>
            <Container sx={{ my: 4 }}>
                <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                    <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8 }}>
                        Microwave technology revolutionizes internet connectivity by providing high-speed data transmission through the air using radio waves. As a leading internet service provider, Data Plus embraces microwave technology to deliver seamless, reliable, and high-performance internet services to our customers.
                    </Typography>
                </Box>
            </Container>
            <Container sx={{ my: 4 }}>
                <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 36, lg: 42, xl: 48 }, letterSpacing: 1, my: 2 }}>
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
            </Container>
            <AppFooter />
        </>
    );
};

const Microwave = () => {
    return <MicrowaveView />;
};

export default Microwave;
