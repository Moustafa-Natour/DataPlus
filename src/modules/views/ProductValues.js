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
            id="StoreMission"
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
                    {/* Mission Section */}
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box
                                component="img"
                                src="https://mui.com/static/themes/onepirate/productValues1.svg"
                                alt="suitcase"
                                sx={{ height: 55 }}
                            />
                            <Typography variant="h6" sx={{ my: 5 }}>
                                MISSION
                            </Typography>
                            <Typography variant="h5">
                                {'Empowering Businesses with Cutting-edge Connectivity Solutions.'}
                                {'Our mission is to provide seamless, high-speed internet services that empower businesses to thrive in the digital era. At Data Plus, we believe in connecting possibilities and fostering growth through reliable and innovative solutions.'}
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Vision Section */}
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box
                                component="img"
                                src="https://mui.com/static/themes/onepirate/productValues2.svg"
                                alt="graph"
                                sx={{ height: 55 }}
                            />
                            <Typography variant="h6" sx={{ my: 5 }}>
                                VISION
                            </Typography>
                            <Typography variant="h5">
                                {'Pioneering a Connected Future for Lebanon.'}
                                {'Our vision is to be the leading provider of honest and reliable internet services, bringing communities together and propelling Lebanon into a new era of connectivity. We believe that affordable, trustworthy, and unlimited internet is not just a luxury but a basic human right.'}
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Statement Section */}
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box
                                component="img"
                                src="https://mui.com/static/themes/onepirate/productValues3.svg"
                                alt="clock"
                                sx={{ height: 55 }}
                            />
                            <Typography variant="h6" sx={{ my: 5 }}>
                                STATEMENT
                            </Typography>
                            <Typography variant="h5">
                                {'Adapting to the Pace of the Cyber World.'}
                                {'In a world where constant progress is key to survival, we embrace change and strive to be the fittest in the ever-evolving cyber landscape. At Data Plus, we handle the technical details, so you can focus on what matters most. Geek is the new trendy, and we are here to deliver smart solutions that work.'}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductValues;
