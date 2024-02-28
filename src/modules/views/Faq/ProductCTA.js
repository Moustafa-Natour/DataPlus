import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, Box as MuiBox, Grid, Tooltip } from '@mui/material';
import L from 'leaflet'; // Import Leaflet library
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import markerIcon from 'leaflet/dist/images/marker-icon.png'; // Import default marker icon image

// Import your image or icon
import customMarkerImg from '../../assets/images/Dicon.png';

function ProductCTA() {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            // Coordinates of the store location
            const latitude = 33.8801265;
            const longitude = 35.4963574;

            // Create map instance
            const map = L.map('map', {
                attributionControl: false // Disable Leaflet attribution
            }).setView([latitude, longitude], 15);

            // Add tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            // Custom marker icon
            const defaultMarkerIcon = new L.Icon({
                iconUrl: markerIcon,
                iconRetinaUrl: markerIcon,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            });

            // Add marker for the store location with custom icon and custom popup content
            const marker = L.marker([latitude, longitude], { icon: defaultMarkerIcon }).addTo(map);

            const popupContent = `
                <div>
                    <img src="${customMarkerImg}" alt="Custom Marker Image" style="width: 100px; height: auto; cursor: pointer;" onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}');" />
                </div>`;

            marker.bindPopup(popupContent).openPopup();

            // Store map instance in ref
            mapRef.current = map;
        }
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <MuiBox id="StoreLocation" >
            <Grid container>
                <Grid item xs={12} md={12} sx={{ zIndex: 1, marginBottom: 5 }}>
                    <MuiBox
                        sx={{
                            background: 'url(https://mui.com/static/themes/onepirate/productCTAImageDots.png)',
                            display: 'flex',
                            justifyContent: 'center',
                            py: 1,
                            px: 1,
                        }}
                    >
                        <Card
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                background: 'url(https://mui.com/static/themes/onepirate/appCurvyLines.png)'
                            }}>
                            <CardHeader
                                align='center'
                                title="Data Plus S.A.R.L"
                                subheader="Location"
                                sx={{
                                    background: 'white',
                                    color: 'black',
                                    borderRadius: '15px 15px 0px 0px'
                                }} />
                            <Tooltip title="Click the logo for directions" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>
                                <div id="map" style={{ width: '100%', height: '400px' }}>
                                    <img src={customMarkerImg} alt="Custom Marker Image" style={{ width: '100px', height: 'auto', cursor: 'pointer' }} onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`)} />
                                </div>
                            </Tooltip>
                        </Card>
                    </MuiBox>
                </Grid>
            </Grid>
        </MuiBox>
    );
}

export default ProductCTA;
