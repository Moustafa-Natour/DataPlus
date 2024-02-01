// Analytics.js
import React from 'react';
import EventTracker from './EventTracker';
import AnalyticsDashboard from './AnalyticsDashboard';
import { AnalyticsProvider } from './AnalyticsContext';
import { Container, Box } from '@mui/material';
import AppAppBar from '../AppBar/AppAppBar';
import AppFooter from '../AppBar/AppFooter';
import { BoxSx, ContainerSx } from '../../utils/StyleSx';
import WebAnalyticsPage from './WebAnalyticsPage';
const index = () => {

    return (
        <AnalyticsProvider>
            <AppAppBar />
            <Container fixed>
                <Box align="center" sx={BoxSx}>
                    <EventTracker />
                    <AnalyticsDashboard />
                </Box>
            </Container>
            <AppFooter />
        </AnalyticsProvider>
    );
};

export default index;