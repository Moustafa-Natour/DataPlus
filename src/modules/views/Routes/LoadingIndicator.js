// LoadingIndicator.js
import React from 'react';
import { styled } from '@mui/system';
import LinearBuffer from './LinearBuffer'; // Import LinearProgressWithLabel
import logo from '../../assets/images/Dicon.png'; // Import your logo image
import './LoadingIndicator.css'; // Import the CSS file
import { ContainerSx } from '../../utils/StyleSx';
import { Container } from '@mui/material';

const RootContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
});

const Logo = styled('img')(({ theme }) => ({
    width: 250, // Adjust the width of the logo as needed
    marginBottom: theme.spacing(2),
    animation: 'spin 1.5s infinite linear', // Apply spinning animation
}));

function LoadingIndicator({ progress }) {
    return (
        <RootContainer>
            <Container maxWidth="sm" sx={ContainerSx}>
                <Logo src={logo} alt="Logo" />
                <LinearBuffer value={progress} />
            </Container>
        </RootContainer>
    );
}

export default LoadingIndicator;
