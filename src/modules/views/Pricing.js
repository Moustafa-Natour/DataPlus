import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import SpeedIcon from '@mui/icons-material/Speed';


const tiers = [
    {
        title: 'Basic Plan',
        price: '2,340,000',
        description: [
            '5 Megabytes/second',
            '10 GB Daily Limit',
        ],
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },
    {
        title: 'Standard Plan',
        subheader: 'Most popular',
        price: '3,150,000',
        description: [
            '6 Megabytes/second',
            '12 GB Daily Limit',
        ],
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },
    {
        title: 'Enhanced Plan',
        price: '3,600,000',
        description: [
            '8 Megabytes/second',
            '16 GB Daily Limit',
        ],
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },

    {
        title: 'Premium Plan',
        price: '4,500,000',
        description: [
            '10 Megabytes/second',
            '20 GB Daily Limit',
        ],
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },
    {
        title: 'Elite Plan',
        price: '5,400,000',
        description: [
            '12 Megabytes/second',
            '24 GB Daily Limit',
        ],
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },
    {
        title: 'Ultimate Plan',
        price: '13,500,000',
        description: [
            '20 Megabytes/second',
            '40 GB Daily Limit',
        ],
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },
    {
        title: 'Dedicated Plan',
        price: '3,600,000',
        description: [
            '1 Megabytes/second',
            'No Daily Limit',
        ],
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
    },
];



const defaultTheme = createTheme();

export default function Pricing() {
    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Container disableGutters maxWidth={{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} component="main" sx={{ pt: 6, pb: 6 }}>
                <Typography component="h1" variant="h2" align="center" color="text.primary" sx={{ borderBottom: ' 4mm ridge #000000' }} gutterBottom >
                    Broadband Pricing
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ textAlign: 'left', ml: 6, mr: 4 }}>
                    {'Explore our carefully crafted broadband pricing plans designed to meet the diverse needs of your business.'}
                    {'Our pricing table is thoughtfully curated to provide valuable solutions for your organization.Leveraging the power of Internet '}
                    {'We offer a seamless and efficient experience with bundle addons for your convenience.'}
                </Typography>
            </Container >
            <Container maxWidth="md" component="main" sx={{ my: 4 }}>
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
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
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2 }}>
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
                                    <Button fullWidth variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
