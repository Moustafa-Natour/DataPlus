import React, { useEffect } from 'react';
import { UseAnalytics } from './AnalyticsContext';
import LocationInfo from './LocationInfo';
import { Container } from '@mui/material';

const EventTracker = () => {
    const { trackEvent, userLocation, setUserLocation } = UseAnalytics();

    useEffect(() => {
        if (!userLocation) {
            // Get user location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setUserLocation({ latitude, longitude });
                    },
                    (error) => {
                        console.error('Error getting user location:', error.message);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        }
    }, [userLocation, setUserLocation]);

    const handleButtonClick = () => {
        if (userLocation) {
            trackEvent('ButtonClick', {
                gpsLocation: {
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                },
                os: getOperatingSystem(navigator.userAgent),
            });
        } else {
            console.error('User location is not available.');
        }
    };

    const getOperatingSystem = (userAgent) => {
        const platforms = ['Windows', 'Mac', 'Linux', 'Android', 'iOS'];
        const os = platforms.find((platform) => userAgent.includes(platform)) || 'Unknown OS';
        return os;
    };

    return (
        <Container fixed>
            <button onClick={handleButtonClick}>Track Button Click</button>
        </Container>
    );
};

export default EventTracker;