import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LocationInfo = ({ fetchData, latitude, longitude }) => {
    const [locationData, setLocationData] = useState(null);

    useEffect(() => {
        if (fetchData && latitude && longitude) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        'https://api.opencagedata.com/geocode/v1/json',
                        {
                            params: {
                                q: `${latitude},${longitude}`,
                                key: '915b429d8dc0405882301bafcb146f0a', // Replace with your OpenCage API key
                            },
                        }
                    );
                    setLocationData(response.data);
                } catch (error) {
                    console.error('Error fetching location data:', error);
                }
            };

            fetchData();
        }
    }, [fetchData, latitude, longitude]);

    return (
        <div>
            <h2>Location Information</h2>
            {locationData && (
                <pre>{JSON.stringify(locationData, null, 2)}</pre>
            )}
        </div>
    );
};

export default LocationInfo;
