import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Dialog, DialogTitle, DialogContent, DialogActions, Box, Button, Card, CardActions, CardContent, CardHeader, CssBaseline, Grid, Typography, GlobalStyles, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorder';
import SpeedIcon from '@mui/icons-material/Speed';
import AppFooter from './AppFooter';
import AppAppBar from './AppAppBar';
import { BoxSx, ContainerSx, TypographyHeaderSx, listItemStyle } from '../utils/StyleSx';

const tiers = [
    {
        title: 'Basic Plan',
        price: '2,340,000',
        description: [
            '5 Megabytes/second',
            'Unlimited/Mo',
        ],
        dailyLimit: '10 Gigabytes/day',
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },
    {
        title: 'Standard Plan',
        subheader: 'Most popular',
        price: '3,150,000',
        description: [
            '6 Megabytes/second',
            'Unlimited/Mo',
        ],
        dailyLimit: '12 Gigabytes/day',
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },
    {
        title: 'Enhanced Plan',
        price: '3,600,000',
        description: [
            '8 Megabytes/second',
            'Unlimited/Mo',
        ],
        dailyLimit: '16 Gigabytes/day',
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },
    {
        title: 'Premium Plan',
        price: '4,500,000',
        description: [
            '10 Megabytes/second',
            'Unlimited/Mo',
        ],
        dailyLimit: '20 Gigabytes/day',
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },
    {
        title: 'Elite Plan',
        price: '5,400,000',
        description: [
            '12 Megabytes/second',
            'Unlimited/Mo',
        ],
        dailyLimit: '24 Gigabytes/day',
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },
    {
        title: 'Ultimate Plan',
        price: '13,500,000',
        description: [
            '20 Megabytes/second',
            'Unlimited/Mo',
        ],
        dailyLimit: '40 Gigabytes/day',
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },
];

const handleWhatsAppClick = (tier) => {
    const phoneNumber = '+96170318228';
    const message = `Hello, I want to apply to the listed Broadband plan ${tier.title} ${tier.description}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

const defaultTheme = createTheme();


const Pricing = () => {
    const [isFullScreenDescriptionOpen, setFullScreenDescriptionOpen] = React.useState(false);
    const [selectedTier, setSelectedTier] = React.useState(null);

    const handleOpenFullScreenDescription = (tier) => {
        setSelectedTier(tier);
        setFullScreenDescriptionOpen(true);
    };

    const handleCloseFullScreenDescription = () => {
        setSelectedTier(null);
        setFullScreenDescriptionOpen(false);
    };
    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppAppBar />
            <Container disableGutters maxWidth={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} component="main" sx={{ ...ContainerSx, p: 10 }}>
                <Box sx={BoxSx}>
                    <Typography component="h1" variant="h2" align="center" color="text.primary" sx={TypographyHeaderSx} gutterBottom >
                        Broadband Pricing
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ textAlign: 'left', ml: 6, mr: 4 }}>
                        {'Explore our carefully crafted broadband pricing plans designed to meet the diverse needs of your business.'}
                        {'Our pricing table is thoughtfully curated to provide valuable solutions for your organization.Leveraging the power of Internet '}
                        {'We offer a seamless and efficient experience with bundle addons for your convenience.'}
                    </Typography>
                    <Container maxWidth="md" component="main" sx={{ my: 4, mb: 7 }}>
                        <Grid container spacing={5} alignItems="flex-end">
                            {tiers.map((tier) => (
                                <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                                    <Card >
                                        <CardHeader
                                            onClick={() => handleOpenFullScreenDescription(tier)}
                                            title={
                                                <>
                                                    {tier.title} <SpeedIcon fontSize="medium" sx={{ ml: 1, color: 'red' }} />
                                                </>
                                            }
                                            subheader={tier.subheader}
                                            titleTypographyProps={{ align: 'center' }}
                                            action={tier.title === 'Pro' ? <StarIcon /> : null}
                                            subheaderTypographyProps={{ align: 'center' }}
                                            sx={{
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'light'
                                                        ? theme.palette.grey[200]
                                                        : theme.palette.grey[700],
                                            }}
                                        />
                                        <CardContent
                                            onClick={() => handleOpenFullScreenDescription(tier)}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2, pb: 2, pt: 2 }}>
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

                    </Container>
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
            <DialogTitle>
                {tier.title}
            </DialogTitle>
            <DialogContent>
                {/* Render the full-screen description here using tier.description */}
                <Typography>
                    {tier.description.join('\n')}
                    <br />
                    {tier.dailyLimit}
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
