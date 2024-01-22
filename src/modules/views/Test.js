import React from 'react';
import { Container } from '@mui/material';
import Typography from '../components/Typography';

const Test = () => {
    const gradientAnimation = {
        background: `linear-gradient(90deg, #000000, #1f1f1f, #595959, #4c4c4c, #444444, #3a3a3a, #323232, #2b2b2b,
            #222222, #2b2b2b, #323232, #3a3a3a, #444444, #4c4c4c, #595959, #1f1f1f, #000000, #000000)`,
        backgroundSize: '180% 180%',
        animation: 'gradient-animation 15s infinite linear',
    };

    return (
        <Container sx={{
            height: "100vh",
            color: 'white',
            ...gradientAnimation,
            '@keyframes gradient-animation': {
                '0%': {
                    backgroundPosition: '0% 50%',
                },
                '100%': {
                    backgroundPosition: '100% 50%',
                },
            },
        }}>
            <Typography variant={'body1'} sx={{ textAlign: 'center' }}>
                test screen
            </Typography>
        </Container>
    );
}

export default Test;
