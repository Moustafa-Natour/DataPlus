// AnalyticsDashboard.js
import React, { useState, useEffect } from 'react';
import { UseAnalytics } from './AnalyticsContext';
import LocationInfo from './LocationInfo';

const AnalyticsDashboard = () => {
    const { trackEvent } = UseAnalytics();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('analyticsEvents')) || [];
        setEvents(storedEvents);
    }, []);

    const { userLocation } = UseAnalytics();

    return (
        <div>
            <h1>Analytics Dashboard</h1>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        {event.eventName} - {event.timestamp}
                    </li>
                ))}
            </ul>
            <LocationInfo fetchData={userLocation} latitude={userLocation?.latitude} longitude={userLocation?.longitude} />

        </div>
    );
};

export default AnalyticsDashboard;
