// AnalyticsDashboard.js
import React, { useState, useEffect } from 'react';
import { UseAnalytics } from './AnalyticsContext';
import LocationInfo from './LocationInfo';
import { Container, Typography } from '@mui/material';
import { TypographyHeaderSx } from '../../utils/StyleSx';

const AnalyticsDashboard = () => {
    const { trackEvent } = UseAnalytics();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('analyticsEvents')) || [];
        setEvents(storedEvents);
    }, []);

    const { userLocation } = UseAnalytics();

    return (
        <Container fixed>
            <Typography variant="h1" sx={TypographyHeaderSx}>Analytics Dashboard</Typography>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        {event.eventName} - {event.timestamp}
                    </li>
                ))}
                <LocationInfo fetchData={userLocation} latitude={userLocation?.latitude} longitude={userLocation?.longitude} />
            </ul>

        </Container>
    );
};

export default AnalyticsDashboard;
