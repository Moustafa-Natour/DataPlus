import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import ProductCTA from './ProductCTA';

const lisx = {
    my: 3,
    textAlign: 'left',
    fontSize: { xs: 14, md: 20, lg: 30, xl: 45 },
    cursor: 'pointer', // Added cursor style for clickable text
};

const Contact = () => {
    const handlePhoneCall = () => {
        const phoneNumber = '+9611818422';
        window.location.href = `tel:${phoneNumber}`;
    };

    const noCursor = {
        my: 3,
        textAlign: 'left',
        fontSize: { xs: 14, md: 20, lg: 30, xl: 45 },
    };

    const handleWhatsApp = () => {
        const phoneNumber = '+96170318228';
        const message = 'Hello! I have a question!';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Container sx={{ maxWidth: '800px', margin: 'auto', padding: 'auto' }}>
            <Typography variant="h1" component="h1" sx={{ textAlign: 'center', fontSize: { xs: 36, md: 48, lg: 60, xl: 72 }, my: 4, borderBottom: ' 4mm ridge #000000' }}>
                Contact Us
            </Typography>
            <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 8, my: 2, p: 4 }}>
                <Typography sx={{ ...lisx }} variant="body1" component="p" onClick={() => alert('Location clicked')}>
                    Main office: Bashir Joumblat Street, Ayas Building, Ground and first floor
                </Typography>
                <Typography sx={{ ...lisx }} variant="body1" component="p" onClick={() => { window.location.href = "mailto:mk@datapluslb.net" }}>
                    Email: mk@datapluslb.net
                </Typography>
                <Typography sx={{ ...lisx }} variant="body1" component="p" onClick={handlePhoneCall}>
                    Phone Number: +961 1-818422
                </Typography>
                <Typography sx={{ ...lisx }} variant="body1" component="p" onClick={handleWhatsApp}>
                    Whatsapp: 70-318228
                </Typography>
                <Typography sx={{ ...noCursor }} variant="body1" component="p">
                    Monday-Saturday: 9:00 AM - 11:59 PM
                </Typography>
                <Typography sx={{ ...noCursor, borderBottom: '2px solid black' }} variant="body1" component="p" >
                    Sunday: 10:00 AM - 6:00 PM
                </Typography>
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
