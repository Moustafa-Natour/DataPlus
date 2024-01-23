import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Box,
    CssBaseline,
    Grid,
    Typography,
    GlobalStyles,
    Container
} from '@mui/material';
import AppFooter from './AppFooter';
import AppAppBar from './AppAppBar';
import PricingCard from './PricingCard';
import { tiers, details } from './pricingData';
import {
    BoxSx,
    ContainerSx,
    TypographyHeaderSx,
    listItemStyle,
    TypographyStyle,
} from '../utils/StyleSx';
import { handleWhatsAppClick } from '../utils/ComonFunc';
import FullScreenDescription from './FullScreenDescription'; // Adjust the path accordingly


const defaultTheme = createTheme();
const Pricing = () => {
    const [isFullScreenDescriptionOpen, setFullScreenDescriptionOpen] = React.useState(false);
    const [selectedTier, setSelectedTier] = React.useState(null);
    const [animatedSpeed, setAnimatedSpeed] = useState(0);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    let PricingFooter = () => {
        return (
            <Typography
                variant="subtitle2"
                align="center"
                sx={{ textAlign: 'center', fontSize: { xs: 12, md: 20 }, my: 4 }}
            >
                {'All profiles are subject to our'}
                <Typography
                    variant="subtitle2"
                    onClick={() => { window.location.href = "/fairusepolicy" }}
                    sx={{
                        ...listItemStyle, textAlign: 'center', fontSize: { xs: 12, md: 20 },
                        display: 'inline', // or 'display: inline-block'
                        marginLeft: 1, // Adjust the spacing between the two Typography components
                    }}
                >
                    {'Fair Use Policy '}
                </Typography>
            </Typography>
        )
    }

    const handleOpenFullScreenDescription = (tier) => {
        setSelectedTier(tier);
        setFullScreenDescriptionOpen(true);
    };
    const handleCloseFullScreenDescription = () => {
        setSelectedTier(null);
        setFullScreenDescriptionOpen(false);
    };
    useEffect(() => {
        if (!isAnimationComplete) {
            const animationDuration = 12000; // Adjust the duration as needed
            const steps = 20; // Number of steps in the animation

            const animateTier = (tier) => {
                const stepValue = tier.speed / steps;

                let step = 0;

                const interval = setInterval(() => {
                    setAnimatedSpeed((prev) => ({
                        ...prev,
                        [tier.title]: Math.min(prev[tier.title] + stepValue, tier.speed),
                    }));
                    step++;

                    if (step >= steps) {
                        clearInterval(interval);
                    }
                }, animationDuration / steps);
            };

            tiers.forEach((tier) => {
                if (!animatedSpeed[tier.title] || animatedSpeed[tier.title] < tier.speed) {
                    setAnimatedSpeed((prev) => ({
                        ...prev,
                        [tier.title]: 0,
                    }));
                    animateTier(tier);
                }
            });

            setIsAnimationComplete(true);
        }
    }, [isAnimationComplete, animatedSpeed]);
    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppAppBar />
            <Container disableGutters component="main" sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography component="h1" variant="h2" align="center" color="text.primary" sx={TypographyHeaderSx} gutterBottom >
                        Broadband Pricing
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" component="p" sx={TypographyStyle}>
                        {details}
                    </Typography>
                    <Grid container spacing={2} alignItems="flex-end">
                        {tiers.map((tier) => (
                            <Grid item key={tier.title} xs={12} sm={12} md={6} lg={4} xl={2}>
                                <PricingCard
                                    tier={tier}
                                    handleOpenFullScreenDescription={handleOpenFullScreenDescription}
                                    animatedSpeed={animatedSpeed}
                                    handleWhatsAppClick={handleWhatsAppClick}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <PricingFooter />
                </Box>
            </Container >
            {/* Render Full-Screen Description */}
            {selectedTier && (
                <FullScreenDescription
                    isOpen={isFullScreenDescriptionOpen}
                    onClose={handleCloseFullScreenDescription}
                    tier={selectedTier}
                    animatedSpeed={animatedSpeed}
                    handleOpenFullScreenDescription={handleOpenFullScreenDescription}
                />
            )}
            <AppFooter />
        </>
    );
};


export default function App() {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <Pricing />
        </ThemeProvider>
    );
}
