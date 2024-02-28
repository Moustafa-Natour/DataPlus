// Analytics.js
import React from 'react';
import EventTracker from './EventTracker';
import AnalyticsDashboard from './AnalyticsDashboard';
import { AnalyticsProvider } from './AnalyticsContext';
import WebAnalyticsPage from './WebAnalyticsPage';
import Container from '../../components/Container';
import Box from '../../components/Box';

const index = () => {

    return (
        <AnalyticsProvider>
            <Container >
                <Box align="center" >
                    <EventTracker />
                    <AnalyticsDashboard />
                </Box>
            </Container>
        </AnalyticsProvider>
    );
};

export default index;