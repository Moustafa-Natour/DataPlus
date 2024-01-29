// AnalyticsPage.js
import React, { useState, useEffect } from 'react';

const AnalyticsPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch analytics data from your storage or API endpoint
        const storedEvents = JSON.parse(localStorage.getItem('analyticsEvents')) || [];
        setEvents(storedEvents);
    }, []);

    return (
        <div>
            <h1>Analytics Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event, index) => (
                        <tr key={index}>
                            <td>{event.eventName}</td>
                            <td>{event.timestamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AnalyticsPage;
