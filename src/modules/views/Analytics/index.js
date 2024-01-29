// Analytics.js
import React from 'react';
import EventTracker from './EventTracker';
import AnalyticsDashboard from './AnalyticsDashboard';
import { AnalyticsProvider } from './AnalyticsContext';
import { Container } from '@mui/material';
import Paper from '../../components/Paper';
const index = () => {

    return (
        <AnalyticsProvider>
            <Container fixed>
                <Paper align="center">
                    <EventTracker />
                    <AnalyticsDashboard />
                </Paper>
            </Container>
        </AnalyticsProvider>
    );
};

export default index;