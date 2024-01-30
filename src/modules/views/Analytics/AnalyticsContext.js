// AnalyticsContext.js
import React, { createContext, useContext, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

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

    // State to control the dialog visibility
    const [open, setOpen] = useState(false);

    // State to store the event data
    const [eventData, setEventData] = useState(null);

    const trackEvent = (eventName, eventData) => {
        // Your tracking logic goes here
        console.log(`Tracking event: ${eventName}`, eventData);

        // Set the event data state
        setEventData(eventData);

        // Open the dialog
        setOpen(true);
    };

    // Function to handle the dialog close
    const handleClose = () => {
        // Close the dialog
        setOpen(false);
    };

    return (
        <AnalyticsContext.Provider value={{ trackEvent, userLocation, setUserLocation }}>
            {children}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Event Data</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Here is the event data that was tracked:
                        <pre>{JSON.stringify(eventData, null, 2)}</pre>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </AnalyticsContext.Provider>
    );
};
