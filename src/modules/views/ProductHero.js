import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Container from '@mui/material/Container';

const handleWhatsAppClick = () => {
    // Replace 'your-number' with your WhatsApp number
    const phoneNumber = '+96170318228';
    const message = 'Hello, I have a question!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};
export default function ProductHero() {
    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundPosition: 'center',
            }}
        >
            <Container>
                <Typography color="black" align="center" variant="h4" marked="center">
                    Internet Is Our Middle Name
                </Typography>
                <Typography
                    color="black"
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
                    onClick={handleWhatsAppClick}
                    sx={{ minWidth: 200 }}
                >
                    Contact Now
                </Button>
                <Typography variant="body2" color="black" sx={{ mt: 2 }}>
                    Discover our internet data bundles
                </Typography>
            </Container>
        </ProductHeroLayout>
    );
}