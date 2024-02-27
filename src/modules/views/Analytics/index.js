// Analytics.js
import React from 'react';
import EventTracker from './EventTracker';
import AnalyticsDashboard from './AnalyticsDashboard';
import { AnalyticsProvider } from './AnalyticsContext';
import { Box } from '@mui/material';
import { BoxSx } from '../../utils/StyleSx';
import WebAnalyticsPage from './WebAnalyticsPage';
import Container from '../../components/Container';

const index = () => {

    return (
        <AnalyticsProvider>
            <Container >
                <Box align="center" sx={BoxSx}>
                    <EventTracker />
                    <AnalyticsDashboard />
                </Box>
            </Container>
        </AnalyticsProvider>
    );
};

export default index;