import React, { useEffect, useState } from 'react';
import getLocationData from './getLocationData';
import { UseAnalytics } from './AnalyticsContext';
import axios from 'axios'; // Import axios for making HTTP requests

const LocationDataFetcher = () => {
    console.log("LocationDataFetcher Renderd");
    const { setUserLocation } = UseAnalytics();
    const [dataSaved, setDataSaved] = useState(false); // State variable to track whether data has been saved

    useEffect(() => {
        console.log("UseEffect Renderd");

        const hasFetchedLocationData = localStorage.getItem('hasFetchedLocationData');
        if (!hasFetchedLocationData && !dataSaved) {
            const fetchData = async () => {
                try {
                    const { latitude, longitude } = await getUserCoordinates();
                    const data = await getLocationData(latitude, longitude);
                    setUserLocation({ latitude, longitude });
                    console.log(data.results[0]);
                    // Perform POST request to save data to backend
                    await saveLocationDataToBackend(data);
                    // Update local storage to indicate that fetching has been completed
                    localStorage.setItem('hasFetchedLocationData', 'true');
                    setDataSaved(true); // Set dataSaved to true after saving data
                } catch (error) {
                    console.error('Error fetching location data:', error);
                }
            };

            fetchData();
        }
    }, [setUserLocation, dataSaved]);

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

    const saveLocationDataToBackend = async (data) => {
        try {
            // Extract relevant fields from data
            const {
                formatted,
                annotations: { callingcode, currency, timezone },
                components: { country, city, municipality, neighbourhood, road }
            } = data.results[0];

            // Create a new VisitorLocation document
            const visitorLocation = {
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
                Road_Name: road
            };

            // Save the document to the database
            await axios.post('http://localhost:3001/api/addVisitor', visitorLocation);
            console.log('Location data saved to backend:', visitorLocation);
        } catch (error) {
            console.error('Error saving location data to backend:', error);
        }
    };

    return null; // Return null to render nothing
};

export default LocationDataFetcher;
