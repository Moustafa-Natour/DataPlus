import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
            <Container sx={{ textAlign: 'center' }}>
                <Typography color='#fff5f8' align="center" variant="h4" marked="center"
                    sx={{ mb: 25 }}>
                    Internet Is Our Middle Name
                </Typography>
                <Typography
                    color='#fff5f8'
                    align="center"
                    variant="h5"
                    sx={{ mb: 4, mt: { xs: 14, sm: 16 } }}
                >
                    Enjoy Fast Stable And Secure Internet
                </Typography>
                <Button
                    color="secondary"
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    size="large"
                    component="a"
                    onClick={handleWhatsAppClick}
                    sx={{ minWidth: 200 }}
                >
                    Contact Now
                </Button>
                <Typography variant="body2" color='#fff5f8' sx={{ mt: 2 }}>
                    Discover our internet data bundles
                </Typography>
            </Container>
        </ProductHeroLayout>
    );
}