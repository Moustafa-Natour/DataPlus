// FullScreenDescription.js
import React, { useState, useEffect } from 'react';
import {
    Container,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Button,
    Grid,
} from '@mui/material';
import styled from 'styled-components'; // Import styled from styled-components
import SpeedometerComponent from './SpeedometerComponent';

const details =
    'Experience boundless internet speed across various CDN applications, including but not limited to Facebook, TikTok, Instagram, YouTube, Google Play Store, and many others. Unlock seamless connectivity and optimized performance for your business operations.';

// Define a styled version of SpeedometerComponent
const StyledSpeedometerComponent = styled(SpeedometerComponent)`
  max-width: 50%;
  height: auto;
  width: 50%;
`;

const FullScreenDescription = ({
    isOpen,
    onClose,
    tier,
    animatedSpeed,
    handleOpenFullScreenDescription,
}) => {
    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isSmallScreen = screenSize.width < 600; // Adjust the threshold as needed

    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle align="center">{tier.title}</DialogTitle>
            <DialogContent>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={6} style={isSmallScreen ? { margin: 'auto' } : null}>
                        {/* Use the styled SpeedometerComponent with adjusted height and width */}
                        <StyledSpeedometerComponent
                            animatedSpeed={animatedSpeed}
                            tier={tier}
                            handleOpenFullScreenDescription={handleOpenFullScreenDescription}
                            speed={{ height: isSmallScreen ? 175 : undefined, width: isSmallScreen ? 175 : undefined }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography align="center" mt={2}>
                            {tier.description.map((line, index) => (
                                <React.Fragment key={index}>
                                    <Typography variant="subtitle1">{line}</Typography>
                                    <br />
                                </React.Fragment>
                            ))}
                            {tier.dailyLimit}
                            <br />
                            {details}
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FullScreenDescription;
