import React, { useEffect } from 'react';
import { UseAnalytics } from './AnalyticsContext';
import LocationInfo from './LocationInfo';

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
        const platforms = ['Win', 'Mac', 'Linux', 'Android', 'iOS'];
        const os = platforms.find((platform) => userAgent.includes(platform)) || 'Unknown OS';
        return os;
    };

    return (
        <div>
            <h1>Event Tracker</h1>
            <button onClick={handleButtonClick}>Track Button Click</button>
            <LocationInfo latitude={userLocation?.latitude} longitude={userLocation?.longitude} />
        </div>
    );
};

export default EventTracker;