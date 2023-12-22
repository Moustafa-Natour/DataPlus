import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';

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
                    src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
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
                                    src="https://mui.com/static/themes/onepirate/productHowItWorks1.svg"
                                    alt="suitcase"
                                    sx={image}
                                />
                                <Typography variant="h5" align="center">
                                    At Data Plus we recognize that life and the internet are not just fun and play,
                                    there is a serious and educational face to it in addition to its Entertainment value.
                                    It is the richest source of information and knowledge at the user’s finger tips.
                                    It is a tremendously added value to any educational institution.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>2.</Box>
                                <Box
                                    component="img"
                                    src="https://mui.com/static/themes/onepirate/productHowItWorks2.svg"
                                    alt="graph"
                                    sx={image}
                                />
                                <Typography variant="h5" align="center">
                                    FAST SECURE AND UNLIMITED INTERNET 24/7
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>3.</Box>
                                <Box
                                    component="img"
                                    src="https://mui.com/static/themes/onepirate/productHowItWorks3.svg"
                                    alt="clock"
                                    sx={image}
                                />
                                <Typography variant="h5" align="center">
                                    {'New offers every week. New experiences, new surprises. '}
                                    {'Your Sundays will no longer be alike.'}
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
                    href="/signup"
                    sx={{ mt: 8 }}
                >
                    Get started
                </Button>
            </Container>
        </Box>
    );
}

export default ProductHowItWorks;