import React from 'react';
import { Container, Typography, Box, Link, Divider } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import ProductCTA from './ProductCTA';
import { BoxSx, ContainerSx, TypographyHeaderSx, listItemStyle } from '../utils/StyleSx';
import { handleEmail, handlePhoneCall, handleWhatsApp, scrollToSection } from '../utils/ComonFunc';



const Contact = () => {
    return (
        <Container sx={ContainerSx}>
            <Box sx={BoxSx}>
                <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                    Contact Us
                </Typography>
                <Typography sx={{ ...listItemStyle }} component={Link} onClick={() => scrollToSection('StoreLocation')}>
                    Main office: Bashir Joumblat Street, Ayas Building, Ground and first floor
                </Typography>
                <Typography sx={{ ...listItemStyle }} component={Link} onClick={handleEmail}>
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
