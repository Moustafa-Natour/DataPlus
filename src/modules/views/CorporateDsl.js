import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';

const CorporateDslView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={{ textAlign: 'center', my: 4 }}>
                <Typography variant="h1" sx={{ fontSize: { xs: 26, md: 38, lg: 50, xl: 62 }, letterSpacing: 1, borderBottom: ' 4mm ridge #000000' }}>
                    Elevate Corporate Connectivity with Data Plus Corporate DSL
                </Typography>
            </Container>
            <Container sx={{ my: 4 }}>
                <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                    <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8 }}>
                        Data Plus redefines corporate connectivity with our advanced Corporate DSL solutions. Tailored to meet the unique demands of businesses, Corporate DSL delivers high-speed Internet over dedicated lines, ensuring reliable and secure connectivity for corporate operations.
                    </Typography>
                </Box>
            </Container>
            <Container sx={{ my: 4 }}>
                <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                    <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8 }}>
                        Our Corporate DSL services are designed to empower businesses with exceptional speeds, low latency, and consistent performance. Whether it's facilitating seamless communication, supporting large-scale data transfers, or ensuring secure online transactions, Data Plus Corporate DSL is your reliable partner for corporate internet solutions.
                    </Typography>
                </Box>
            </Container>
            <Container sx={{ my: 4 }}>
                <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 36, lg: 42, xl: 48 }, letterSpacing: 1, my: 2 }}>
                        Key Features of Data Plus Corporate DSL:
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8 }}>
                        - Dedicated High-Speed Lines: Enjoy exclusive internet connectivity tailored for your business needs.
                        <br />
                        - Reliable and Secure: Benefit from a secure and stable connection to support your critical business operations.
                        <br />
                        - Scalable Solutions: Our Corporate DSL plans are designed to scale with your growing business requirements.
                        <br />
                        - 24/7 Support: Data Plus is committed to providing round-the-clock support to ensure uninterrupted corporate connectivity.
                    </Typography>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const CorporateDsl = () => {
    return <CorporateDslView />;
};

export default CorporateDsl;
