// AnalyticsContext.js
import React, { createContext, useContext, useState } from 'react';

const AnalyticsContext = createContext();

export const UseAnalytics = () => {
    const context = useContext(AnalyticsContext);
    if (!context) {
        throw new Error('useAnalytics must be used within an AP');
    }
    return context;
};

export const AnalyticsProvider = ({ children }) => {
    const [userLocation, setUserLocation] = useState(null);

    const trackEvent = (eventName, eventData) => {
        // Your tracking logic goes here
        console.log(`Tracking event: ${eventName}`, eventData);
    };

    return (
        <AnalyticsContext.Provider value={{ trackEvent, userLocation, setUserLocation }}>
            {children}
        </AnalyticsContext.Provider>
    );
};
