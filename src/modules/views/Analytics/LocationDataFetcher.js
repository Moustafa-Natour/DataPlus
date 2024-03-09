import React, { useEffect, useState } from 'react';
import getLocationData from './getLocationData';
import { UseAnalytics } from './AnalyticsContext';
import axios from 'axios'; // Import axios for making HTTP requests

const LocationDataFetcher = () => {
    const { setUserLocation } = UseAnalytics();
    const [dataSaved, setDataSaved] = useState(false); // State variable to track whether data has been saved

    const getUserCoordinates = () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        resolve({ latitude, longitude });
                    },
                    (error) => {
                        console.error('Error getting user location:', error.message);
                        reject(error);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
                reject(new Error('Geolocation not supported'));
            }
        });
    };

    const generateSessionId = () => {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    };

    const getSessionId = () => {
        let sessionId = localStorage.getItem('sessionId');
        if (!sessionId) {
            sessionId = generateSessionId();
            localStorage.setItem('sessionId', sessionId);
        }
        return sessionId;
    };

    const getUserIpAddress = async () => {
        try {
            const response = await axios.get('https://api.ipify.org?format=json');
            return response.data.ip;
        } catch (error) {
            console.error('Error getting user IP address:', error);
            return null;
        }
    };

    const saveLocationDataToBackend = async (data, sessionId, ipAddress) => {
        try {
            const { brands, mobile, platform } = navigator.userAgentData;
            // Extract relevant fields from data
            const {
                formatted,
                annotations: { callingcode, currency, timezone },
                components: { country, city, municipality, neighbourhood, road }
            } = data.results[0];

            // Create a new VisitorLocation document
            const visitorLocation = {
                IP_Address: ipAddress, // Include IP address
                Session_Id: sessionId, // Include session ID
                Formatted_Address: formatted,
                Country_Code: callingcode,
                Currency: currency.name,
                Currency_Code: currency.iso_code,
                Currency_Symbol: currency.symbol,
                TimeZone: timezone.name,
                GMT_Offset: timezone.offset_string,
                Country: country,
                City: city,
                Municipality: municipality,
                Neighbourhood: neighbourhood,
                Road_Name: road,
                // Include device information
                Device_Brands: brands.map(brand => brand.brand).join(', '), // Convert brands array to comma-separated string
                Mobile_Device: mobile,
                Platform: platform
            };

            // Save the document to the database
            await axios.post('http://localhost:3001/api/mysql/addVisitorLocation', visitorLocation);
            console.log('Location data saved to backend:', visitorLocation);
        } catch (error) {
            console.error('Error saving location data to backend:', error);
        }
    };

    const incrementVisitCount = async (sessionId) => {
        try {
            await axios.post(`http://localhost:3001/api/mysql/incrementVisitCount/${sessionId}`);
            console.log('Visit count incremented successfully');
        } catch (error) {
            console.error('Error incrementing visit count:', error);
        }
    };

    useEffect(() => {
        console.log("Add effect rendered");

        const hasFetchedLocationData = localStorage.getItem('hasFetchedLocationData');
        if (!hasFetchedLocationData && !dataSaved) {
            const fetchData = async () => {
                try {
                    const sessionId = getSessionId();
                    const ipAddress = await getUserIpAddress();
                    const { latitude, longitude } = await getUserCoordinates();
                    const data = await getLocationData(latitude, longitude);
                    setUserLocation({ latitude, longitude });

                    await saveLocationDataToBackend(data, sessionId, ipAddress);

                    localStorage.setItem('hasFetchedLocationData', 'true');
                    setDataSaved(true);
                } catch (error) {
                    console.error('Error fetching location data:', error);
                }
            };

            fetchData();
        }
    }, [setUserLocation, dataSaved]);

    useEffect(() => {
        console.log("Update effect rendered");
        const updateVisitCount = async () => {
            try {
                const sessionId = getSessionId();
                await incrementVisitCount(sessionId);
            } catch (error) {
                console.error('Error updating visit count:', error);
            }
        };

        updateVisitCount();
    }, []);



    return null;
};

export default LocationDataFetcher;
