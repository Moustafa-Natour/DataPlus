import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { BoxSx, ContainerSx } from '../utils/StyleSx';

const CorporateDslView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={{ ...ContainerSx, textAlign: 'center' }}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" sx={{ fontSize: { xs: 26, md: 38, lg: 50, xl: 62 }, letterSpacing: 1, lineHeight: 1.5, borderBottom: ' 4mm ridge #000000' }}>
                        Elevate Corporate Connectivity with Corporate DSL
                    </Typography>

                    <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                        <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8, mt: 2 }}>
                            Data Plus redefines corporate connectivity with our advanced Corporate DSL solutions. Tailored to meet the unique demands of businesses, Corporate DSL delivers high-speed Internet over dedicated lines, ensuring reliable and secure connectivity for corporate operations.
                        </Typography>
                    </Box>

                    <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                        <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18, lg: 20, xl: 22 }, lineHeight: 1.8 }}>
                            Our Corporate DSL services are designed to empower businesses with exceptional speeds, low latency, and consistent performance. Whether it's facilitating seamless communication, supporting large-scale data transfers, or ensuring secure online transactions, Data Plus Corporate DSL is your reliable partner for corporate internet solutions with a special dedicated bunlde 1MB/s for 3,600,000 LBP Only.
                        </Typography>
                    </Box>

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
