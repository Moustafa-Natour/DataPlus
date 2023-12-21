import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

function ProductValues() {
    return (
        <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
        >
            <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
                <Box
                    component="img"
                    src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
                    alt="curvy lines"
                    sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
                />
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box
                                component="img"
                                src="https://mui.com/static/themes/onepirate/productValues1.svg"
                                alt="suitcase"
                                sx={{ height: 55 }}
                            />
                            <Typography variant="h6" sx={{ my: 5 }}>
                                The best luxury hotels
                            </Typography>
                            <Typography variant="h5">
                                {
                                    'With the internet growing more complex by the day, you need an internet service that can keep up with the challenges of more content and more data Data Plus helps you conquer that challenge.'
                                }

                                {
                                    ',Fibranet is the new Fibre-Optics service, giving you a better, faster and more enjoyable online experience. Call 70 318 228 today to subscribe and bring home the next generation internet.'
                                }
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box
                                component="img"
                                src="https://mui.com/static/themes/onepirate/productValues2.svg"
                                alt="graph"
                                sx={{ height: 55 }}
                            />
                            <Typography variant="h6" sx={{ my: 5 }}>
                                New experiences
                            </Typography>
                            <Typography variant="h5">
                                {
                                    'One of the leading provider of honest internet services that brings people together and takes Lebanon from one era to another.'
                                }

                                {'Because the Internet is no longer a luxury but a basic human right, we believe that everybody should have access to affordable, trustworthy and unlimited Internet.'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box
                                component="img"
                                src="https://mui.com/static/themes/onepirate/productValues3.svg"
                                alt="clock"
                                sx={{ height: 55 }}
                            />
                            <Typography variant="h6" sx={{ my: 5 }}>
                                Exclusive rates
                            </Typography>
                            <Typography variant="h5">
                                {'By registering, you will access specially negotiated rates '}
                                {'that you will not find anywhere else.'}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductValues;