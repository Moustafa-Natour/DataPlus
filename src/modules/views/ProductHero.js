import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import BannerImg from './Dataplus.png';

const backgroundImage = BannerImg;

export default function ProductHero() {
    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: 'none' }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Upgrade your Sundays
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
            >
                Enjoy Fast Stable And Secure Internet
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                href="/premium-themes/onepirate/sign-up/"
                sx={{ minWidth: 200 }}
            >
                Register
            </Button>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover our data plus bundles
            </Typography>
        </ProductHeroLayout>
    );
}