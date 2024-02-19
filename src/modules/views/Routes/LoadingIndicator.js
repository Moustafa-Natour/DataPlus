// LoadingIndicator.js
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/system';
import logo from '../../assets/images/Dicon.png'; // Import your logo image
import './LoadingIndicator.css'; // Import the CSS file

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

const LinearProgressBar = styled(LinearProgress)(({ theme }) => ({
    width: '80%', // Adjust the width of the progress bar as needed
    marginTop: theme.spacing(2),
}));

function LoadingIndicator() {
    return (
        <RootContainer>
            <Logo src={logo} alt="Logo" />
            <LinearProgressBar />
        </RootContainer>
    );
}

export default LoadingIndicator;
