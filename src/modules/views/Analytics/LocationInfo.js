import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

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
                                key: '915b429d8dc0405882301bafcb146f0a',
                            },
                        }
                    );

                    // Add unique id to each row
                    const dataWithIds = response.data.results.map((result, index) => ({
                        ...result,
                        id: index, // Using the array index as a simple identifier
                    }));

                    setLocationData({
                        results: dataWithIds,
                    });
                } catch (error) {
                    console.error('Error fetching location data:', error);
                }
            };

            fetchData();
        }
    }, [fetchData, latitude, longitude]);

    if (!locationData) return <div>Loading...</div>;

    // Flatten nested objects within each result
    const flattenObject = (obj) => {
        const flattened = {};
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                const flatObject = flattenObject(obj[key]);
                for (const subKey in flatObject) {
                    flattened[`${key}.${subKey}`] = flatObject[subKey];
                }
            } else {
                flattened[key] = obj[key];
            }
        }
        return flattened;
    };

    // Flatten the first result to get column definitions
    const flattenedFirstResult = flattenObject(locationData.results[0]);

    // Generate columns dynamically based on the flattened properties
    const columns = Object.keys(flattenedFirstResult).map((property) => ({
        field: property,
        headerName: property,
        width: 200,
    }));

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Location Information</h2>
            <DataGrid
                rows={locationData.results.map((result) => flattenObject(result))}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};

export default LocationInfo;
