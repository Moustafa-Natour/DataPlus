import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import OffersCarousal from './OffersCarousal';

const NewOffer = () => {
    return (
        <>
            <Box
                id="StoreMission"
                component="section"
                sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
            >
                <Container sx={{ display: 'flex', position: 'relative' }}>
                    <Box
                        component="img"
                        src={require('../../assets/images/productCurvyLines.png')}
                        alt="curvy lines"
                        sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
                    />

                    <Paper elevation={8} square={false} sx={{ maxWidth: { xs: 280, sm: 420, md: 500, lg: 600, xl: 600 }, textAlign: 'center', my: 10, mx: 'auto' }}>
                        <OffersCarousal />
                    </Paper>
                </Container>

            </Box>

        </>

    );
}

export default NewOffer;
