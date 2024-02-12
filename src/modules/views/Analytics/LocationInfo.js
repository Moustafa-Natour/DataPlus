import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import Typography from '../../components/Typography';
import { TypographyStyle } from '../../utils/StyleSx';
import getLocationData from './getLocationData'; // Import the function

const LocationInfo = ({ fetchData, latitude, longitude }) => {
    const [locationData, setLocationData] = useState(null);

    useEffect(() => {
        if (fetchData && latitude && longitude) {
            const fetchData = async () => {
                const data = await getLocationData(latitude, longitude); // Use the function
                setLocationData(data);
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
        { field: 'formatted', headerName: 'Formatted Address', width: 380 },
        { field: 'annotations.callingcode', headerName: 'Country Code', width: 100 },
        { field: 'annotations.currency.name', headerName: 'Currency', width: 150 },
        { field: 'annotations.currency.iso_code', headerName: 'Currency Code', width: 150 },
        { field: 'annotations.currency.symbol', headerName: 'Currency Symbol', width: 150 },
        { field: 'annotations.timezone.name', headerName: 'TimeZone', width: 150 },
        { field: 'annotations.timezone.offset_string', headerName: 'GMT Offset', width: 150 },
        { field: 'components.country', headerName: 'Country', width: 100 },
        { field: 'components.city', headerName: 'City', width: 100 },
        { field: 'components.municipality', headerName: 'Municipality', width: 100 },
        { field: 'components.neighbourhood', headerName: 'Neighbourhood', width: 100 },
        { field: 'components.road', headerName: 'Road name', width: 100 },
    ];

    const LocationDashboardView = () => {
        return (
            <Container style={{ height: 'fit-content', width: '100%' }}>
                <Typography variant='h2' sx={{ ...TypographyStyle, textAlign: 'center' }}>Location Information</Typography>
                <DataGrid
                    rows={rows} // Use rowsWithFlags
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    sx={{ border: 'none', width: '100%', height: '100%', margin: '5 5 5 5' }}
                />
            </Container>
        );
    }
    // Update DataGrid rows to use rowsWithFlags
    return (
        <LocationDashboardView />
    );
};

export default LocationInfo;
