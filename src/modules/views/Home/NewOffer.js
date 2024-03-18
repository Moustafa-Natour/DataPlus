import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import RecipeReviewCard from './RecipeReviewCard'; // Assuming RecipeReviewCard component is in a separate file

const NewOffer = () => {
    // Sample data for the title
    const title = "Happy Mothers Day";

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

                    <Paper elevation={8} square={false} sx={{ maxWidth: 345, textAlign: 'center', my: 10, mx: 'auto', p: 4 }}>
                        {/* Integrate RecipeReviewCard component */}
                        <RecipeReviewCard title={title} />
                    </Paper>
                </Container>

            </Box>

        </>

    );
}

export default NewOffer;
