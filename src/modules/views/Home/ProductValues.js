// ProductValues.js
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import { ProductValuesData } from '../../data/ProductValuesData';

const itemSx = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

function ProductValues() {
    return (
        <Box
            id="StoreMission"
            component="section"
            sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
        >
            <Container sx={{ mt: 15, mb: 15, display: 'flex', position: 'relative' }}>
                <Box
                    component="img"
                    src={require('../../assets/images/productCurvyLines.png')}
                    alt="curvy lines"
                    sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
                />
                <Grid container spacing={5}>
                    {ProductValuesData.map((item) => (
                        <Grid item xs={12} md={4} key={item.title}>
                            <Box sx={itemSx}>
                                <Box
                                    component="img"
                                    src={item.imageSrc}
                                    alt={item.title}
                                    sx={{ height: 55 }}
                                />
                                <Typography variant="h6" sx={{ my: 5 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="h5">
                                    {item.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductValues;
