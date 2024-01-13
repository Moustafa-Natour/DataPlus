import React from 'react';
import { Container, Typography, Box, Link, Divider } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import ProductCTA from './ProductCTA';
import { BoxSx, ContainerSx, TypographyHeaderSx } from '../utils/StyleSx';

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
        <Container sx={ContainerSx}>
            <Box sx={BoxSx}>
                <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
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
                <Divider variant='middle' sx={{ my: 4, bgcolor: 'black' }} />
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
