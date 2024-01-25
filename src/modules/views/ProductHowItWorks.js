import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import { handlePageChange, handleWhatsApp } from '../utils/ComonFunc';

const item = {
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
                    src={require('../assets/images/productCurvyLines.png')}
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
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>1.</Box>
                                <Box
                                    component="img"
                                    src={require('../assets/images/productHowItWorks1.png')}
                                    alt="suitcase"
                                    sx={image}
                                />
                                <Typography variant="h5" align="center">
                                    {'Unlocking the Educational Power of the Internet.'}
                                    {'At Data Plus, we understand that the internet is not just for entertainment. It is a rich source of information and knowledge that enhances educational experiences. We bring serious value to the playful world of the internet.'}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>2.</Box>
                                <Box
                                    component="img"
                                    src={require('../assets/images/productHowItWorks2.png')}

                                    alt="graph"
                                    sx={image}
                                />
                                <Typography variant="h5" align="center">
                                    {'Fast, Secure, and Unlimited Internet 24/7.'}
                                    {'Experience the power of Data Plus with our high-speed, secure, and reliable internet services. Stay connected anytime, anywhere with our 24/7 unlimited internet access.'}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>3.</Box>
                                <Box
                                    component="img"
                                    src={require('../assets/images/productHowItWorks3.png')}
                                    alt="clock"
                                    sx={image}
                                />
                                <Typography variant="h5" align="center">
                                    {'New Addons For Every Bundle for Unforgettable Experiences.'}
                                    {'Discover a world of surprises with Data Plus. Every bundle brings new addon and experiences that will redefine your experience with Real IP, Free night and Gaming pool. Your internet experience will never be the same again.'}
                                </Typography>
                            </Box>
                        </Grid>
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
