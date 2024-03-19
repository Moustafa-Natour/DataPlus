import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import RecipeReviewCard from './RecipeReviewCard'; // Assuming RecipeReviewCard component is in a separate file
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

                    <Paper elevation={8} square={false} sx={{ maxWidth: 500, textAlign: 'center', my: 5, mx: 'auto', p: 4 }}>
                        <OffersCarousal />
                    </Paper>
                </Container>

            </Box>

        </>

    );
}

export default NewOffer;
