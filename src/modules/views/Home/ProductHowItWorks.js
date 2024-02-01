// ProductHowItWorks.js
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import { handleWhatsApp } from '../../utils/ComonFunc';
import { ProductHowItWorksData } from '../../data/ProductHowItWorksData';

const itemSx = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

const number = {
    fontSize: 24,
    fontFamily: 'default',
    color: 'secondary.main',
    fontWeight: 'medium',
};

const image = {
    height: 55,
    my: 4,
    display: 'flex',            // Center the image within the box
    justifyContent: 'center',  // Center the image within the box
};

function ProductHowItWorks() {
    return (
        <Box
            component="section"
            sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
        >
            <Container
                sx={{
                    mt: 10,
                    mb: 15,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    src={require('../../assets/images/productCurvyLines.png')}
                    alt="curvy lines"
                    sx={{
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: -180,
                        opacity: 0.7,
                    }}
                />
                <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
                    How it works
                </Typography>
                <div>
                    <Grid container spacing={5}>
                        {ProductHowItWorksData.map((item) => (
                            <Grid item xs={12} md={4} key={item.number}>
                                <Box sx={itemSx}>
                                    <Box sx={number}>{item.number}</Box>
                                    <Box
                                        component="img"
                                        src={item.imageSrc}
                                        alt="image"
                                        sx={image}
                                    />
                                    <Typography variant="h5" align="left">
                                        {item.title}
                                        {item.description && <br />}
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <Button
                    color="secondary"
                    size="large"
                    variant="contained"
                    component="a"
                    onClick={handleWhatsApp}
                    sx={{ mt: 8 }}
                >
                    Get started
                </Button>
            </Container>
        </Box>
    );
}

export default ProductHowItWorks;
