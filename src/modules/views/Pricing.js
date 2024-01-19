import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Dialog, DialogTitle, DialogContent, DialogActions, Box, Button, Card, CardActions, CardContent, CardHeader, CssBaseline, Grid, Typography, GlobalStyles, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorder';
import SpeedIcon from '@mui/icons-material/Speed';
import AppFooter from './AppFooter';
import AppAppBar from './AppAppBar';
import { BoxSx, ContainerSx, TypographyHeaderSx, listItemStyle, TypographyStyle, CardSx } from '../utils/StyleSx';
import { handleWhatsAppClick } from '../utils/ComonFunc';
import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks,
    DangerPath,
    Indicator,
} from 'react-speedometer';
const tiers = [
    {
        title: 'Basic Plan',
        price: '2,340,000',
        description: [
            '5 Megabytes/second',
            'Unlimited Download/Mo',
        ],
        dailyLimit: '10 Gigabytes/day',
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
        speed: 5,
    },
    {
        title: 'Standard Plan',
        subheader: 'Most popular',
        price: '3,150,000',
        description: [
            '6 Megabytes/second',
            'Unlimited Download/Mo',
        ],
        dailyLimit: '12 Gigabytes/day',
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
        speed: 6,
    },
    {
        title: 'Enhanced Plan',
        price: '3,600,000',
        description: [
            '8 Megabytes/second',
            'Unlimited Download/Mo',
        ],
        dailyLimit: '16 Gigabytes/day',
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
        speed: 8,
    },
    {
        title: 'Premium Plan',
        price: '4,500,000',
        description: [
            '10 Megabytes/second',
            'Unlimited Download/Mo',
        ],
        dailyLimit: '20 Gigabytes/day',
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
        speed: 10,
    },
    {
        title: 'Elite Plan',
        price: '5,400,000',
        description: [
            '12 Megabytes/second',
            'Unlimited Download/Mo',
        ],
        dailyLimit: '24 Gigabytes/day',
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
        speed: 12,
    },
    {
        title: 'Ultimate Plan',
        price: '13,500,000',
        description: [
            '20 Megabytes/second',
            'Unlimited Download/Mo',
        ],
        dailyLimit: '40 Gigabytes/day',
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
        speed: 20,
    },
];

const defaultTheme = createTheme();
const Pricing = () => {
    const [isFullScreenDescriptionOpen, setFullScreenDescriptionOpen] = React.useState(false);
    const [selectedTier, setSelectedTier] = React.useState(null);
    const [animatedSpeed, setAnimatedSpeed] = useState(0);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

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
            const animationDuration = 2000; // Adjust the duration as needed
            const steps = 50; // Number of steps in the animation

            const animateTier = (tier) => {
                const stepValue = tier.speed / steps;

                let step = 0;

                const interval = setInterval(() => {
                    setAnimatedSpeed((prev) => ({
                        ...prev,
                        [tier.title]: prev[tier.title] + stepValue,
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
    }, [isAnimationComplete, animatedSpeed, tiers]);
    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppAppBar />
            <Container disableGutters maxWidth={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} component="main" sx={{ ...ContainerSx, p: 5 }}>
                <Box sx={BoxSx}>
                    <Typography component="h1" variant="h2" align="center" color="text.primary" sx={TypographyHeaderSx} gutterBottom >
                        Broadband Pricing
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" component="p" sx={TypographyStyle}>
                        {'Explore our carefully crafted broadband pricing plans designed to meet the diverse needs of your business.'}
                        {'Our pricing table is thoughtfully curated to provide valuable solutions for your organization.Leveraging the power of Internet '}
                        {'We offer a seamless and efficient experience with bundle addons for your convenience.'}
                    </Typography>
                    <Grid container spacing={2} alignItems="flex-end">
                        {tiers.map((tier) => (
                            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 12} md={6}>
                                <Card sx={CardSx}>
                                    <CardHeader
                                        onClick={() => handleOpenFullScreenDescription(tier)}
                                        title={
                                            <>
                                                {tier.title}
                                            </>
                                        }
                                        subheader={tier.subheader}
                                        titleTypographyProps={{ align: 'center' }}
                                        action={tier.title === 'Pro' ? <StarIcon /> : null}
                                        subheaderTypographyProps={{ align: 'center' }}
                                        sx={{
                                            width: '100%',
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'light'
                                                    ? theme.palette.grey[200]
                                                    : theme.palette.grey[700],
                                        }}
                                    />
                                    <CardContent
                                        onClick={() => handleOpenFullScreenDescription(tier)}
                                        sx={{
                                            flex: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                        }}
                                    >

                                        <div
                                            style={{
                                                background: 'linear-gradient(45deg, #00a0e5, #0090d6, #0077bd, #C13584,#5851DB, #833AB4)',
                                                padding: '14px',
                                                borderRadius: '50%',
                                                width: 'auto', // Adjust the width and height to fit your design
                                                height: 'auto',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Speedometer
                                                value={animatedSpeed[tier.title] || 0}
                                                max={20}
                                                fontFamily='squada-one'
                                                needleHeightRatio={0.7}
                                                needleColor="#0084ff"
                                                startColor="#0084ff"
                                                endColor="#ff0000"
                                                currentValueText={tier.speed + 'MB/s'}
                                                ringWidth={15}
                                                needleTransitionDuration={3000}
                                                needleTransition="easeElastic"
                                                textColor="#333"
                                                valueFormat="d"
                                                customSegmentStops={[0, 5, 10, 15, 20]}
                                                customSegmentLabels={[
                                                    { text: '0 MB/s', position: 'OUTSIDE' },
                                                    { text: '5 MB/s', position: 'OUTSIDE' },
                                                    { text: '10 MB/s', position: 'OUTSIDE' },
                                                    { text: '15 MB/s', position: 'OUTSIDE' },
                                                    { text: '20 MB/s', position: 'OUTSIDE' },
                                                ]}
                                                marks={{
                                                    0: '0 MB/s',
                                                    5: '5 MB/s',
                                                    10: '10 MB/s',
                                                    15: '15 MB/s',
                                                    20: '20 MB/s',
                                                }}
                                            >
                                                <Background outerRadius={90} innerRadius={80} />
                                                <Arc arcWidth={4} />
                                                <Needle
                                                    baseOffset={55}
                                                    circleRadius={25}
                                                    needleHeightRatio={0.7}
                                                    color="cyan"
                                                    circleColor='#1d5293'
                                                />
                                                <DangerPath arcWidth={12} angle={100} color="red" offset={-7} />
                                                <Progress arcWidth={12} />
                                                <Marks step={1} />
                                            </Speedometer>
                                        </div>



                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, pb: 2, pt: 2 }}>
                                            <Typography component="h5" variant="h5" color="text.primary">
                                                {tier.price} L.B.P
                                            </Typography>
                                            <Typography variant="h6" color="text.secondary">
                                                /mo
                                            </Typography>
                                        </Box>
                                        <ul>
                                            {tier.description.map((line) => (
                                                <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            fullWidth
                                            variant={tier.buttonVariant}
                                            onClick={() => handleWhatsAppClick(tier)}
                                        >
                                            {tier.buttonText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
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
                </Box>
            </Container >
            {/* Render Full-Screen Description */}
            {selectedTier && (
                <FullScreenDescription
                    isOpen={isFullScreenDescriptionOpen}
                    onClose={handleCloseFullScreenDescription}
                    tier={selectedTier}
                />
            )}
            <AppFooter />
        </>
    );
};
// FullScreenDescription component
const FullScreenDescription = ({ isOpen, onClose, tier }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            fullWidth
            maxWidth="md"
        >
            <DialogTitle align='center' sx={TypographyHeaderSx}>
                {tier.title}
            </DialogTitle>
            <DialogContent>
                {/* Render the full-screen description here using tier.description */}
                <Typography align='center' sx={TypographyStyle}>
                    {tier.description.map((line, index) => (
                        <React.Fragment key={index}>
                            <Typography component="span" sx={TypographyStyle} variant="subtitle1">
                                {line}
                            </Typography>
                            <br />
                        </React.Fragment>
                    ))}
                    {tier.dailyLimit}
                    <br />
                    {'Experience boundless internet speed across various CDN applications, including but not limited to Facebook, TikTok, Instagram, YouTube, Google Play Store, and many others. Unlock seamless connectivity and optimized performance for your business operations.'}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
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
