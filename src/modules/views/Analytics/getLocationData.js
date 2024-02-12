// getLocationData.js

import axios from 'axios';

const getLocationData = async (latitude, longitude) => {
    try {
        const response = await axios.get(
            'https://api.opencagedata.com/geocode/v1/json',
            {
                params: {
                    q: `${latitude},${longitude}`,
                    key: '915b429d8dc0405882301bafcb146f0a',
                },
            }
        );

        // Add unique id to each row
        const dataWithIds = response.data.results.map((result, index) => ({
            ...result,
            id: index, // Using the array index as a simple identifier
        }));

        return {
            results: dataWithIds,
        };
    } catch (error) {
        console.error('Error fetching location data:', error);
        return null;
    }
};

export default getLocationData;
