import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import Typography from '../../components/Typography';
import { TypographyStyle } from '../../utils/StyleSx';

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

    // Flatten the first result to get row definitions
    const flattenedFirstResult = flattenObject(locationData.results[0]);

    // Generate rows dynamically based on the flattened properties
    const rows = locationData.results.map((result, index) => ({
        id: index,
        ...flattenObject(result),
    }));

    // Define custom column names and widths
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'formatted', headerName: 'Formatted Address', width: 300 },
        { field: 'annotations.Maidenhead', headerName: 'Grid Square', width: 150 },
        { field: 'components.country', headerName: 'Country', width: 200 },
        { field: 'components.city', headerName: 'City', width: 200 },
        { field: 'geometry.lat', headerName: 'Latitude', width: 150 },
        { field: 'geometry.lng', headerName: 'Longitude', width: 150 },
        { field: 'confidence', headerName: 'Confidence Level', width: 200 },
    ];


    return (
        <Container style={{ height: 'fit-content', width: '100%' }}>
            <Typography variant='h2' sx={{ ...TypographyStyle, textAlign: 'center' }}>Location Information</Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                sx={{ border: 'none', width: '100%', height: '100%', margin: '5 5 5 5' }}
            />
        </Container>
    );
};

export default LocationInfo;
