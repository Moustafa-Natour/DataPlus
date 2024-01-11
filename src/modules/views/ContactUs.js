import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import ProductCTA from './ProductCTA';

const listItemStyle = {
    display: 'block',
    my: 3,
    textAlign: 'left',
    fontSize: { xs: 16, md: 24, lg: 30, xl: 45 },
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'text.primary',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
        color: 'primary.main',
    },
};

const Contact = () => {
    const handlePhoneCall = () => {
        const phoneNumber = '+96101818422';
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        const phoneNumber = '+96170318228';
        const message = 'Hello! I have a question!';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Container sx={{ maxWidth: '800px', margin: 'auto', padding: 'auto' }}>
            <Box
                sx={{
                    border: '2px solid #e0e0e0',
                    borderRadius: '12px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    my: 2,
                    p: 4,
                }}
            >
                <Typography variant="h1" component="h1" sx={{ textAlign: 'center', fontSize: { xs: 36, md: 48, lg: 60, xl: 72 }, my: 4, borderBottom: '4mm ridge #000000' }}>
                    Contact Us
                </Typography>
                <Typography sx={{ ...listItemStyle }} component={Link} onClick={() => alert('Location clicked')}>
                    Main office: Bashir Joumblat Street, Ayas Building, Ground and first floor
                </Typography>
                <Typography sx={{ ...listItemStyle }} component={Link} onClick={() => { window.location.href = "mailto:mk@datapluslb.net" }}>
                    Email: mk@datapluslb.net
                </Typography>
                <Typography sx={{ ...listItemStyle }} component={Link} onClick={handlePhoneCall}>
                    Phone Number: +961 1-818422
                </Typography>
                <Typography sx={{ ...listItemStyle }} component={Link} onClick={handleWhatsApp}>
                    Whatsapp: 70-318228
                </Typography>
                <Typography sx={{ ...listItemStyle, fontSize: { xs: 16, md: 24, lg: 34, xl: 48 } }}>
                    Monday-Saturday: 9:00 AM - 11:59 PM
                </Typography>
                <Typography sx={{ ...listItemStyle, fontSize: { xs: 16, md: 24, lg: 34, xl: 48 } }}>
                    Sunday: 10:00 AM - 6:00 PM
                </Typography>
            </Box>
            <Box
                sx={{
                    border: '2px solid #e0e0e0',
                    borderRadius: '12px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    my: 2,
                    p: 4,
                }}
            >
                <ProductCTA />
            </Box>
        </Container>
    );
};

const ContactUs = () => {
    return (
        <>
            <AppAppBar />
            <Contact />
            <AppFooter />
        </>
    );
};

export default ContactUs;
