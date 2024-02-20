import React from 'react';
import { Container, Typography, Box, Link, Divider } from '@mui/material';
import ProductCTA from './ProductCTA';
import { BoxSx, ContainerSx, TypographyHeaderSx, listItemStyle } from '../../utils/StyleSx';
import { handleEmail, handlePhoneCall, handleWhatsApp, scrollToSection } from '../../utils/ComonFunc';
import { ContactData } from '../../data/ContactData';

const Contact = () => {
    return (
        <Container sx={ContainerSx}>
            <Box sx={BoxSx}>
                <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                    {ContactData.title}
                </Typography>
                <Typography sx={{ ...listItemStyle }} component={Link} onClick={() => scrollToSection('StoreLocation')}>
                    {ContactData.address}
                </Typography>
                <Typography sx={{ ...listItemStyle }} component={Link} onClick={handleEmail}>
                    {ContactData.email}
                </Typography>
                <Typography sx={{ ...listItemStyle }} component={Link} onClick={handlePhoneCall}>
                    {ContactData.phoneNumber}
                </Typography>
                <Typography sx={{ ...listItemStyle }} component={Link} onClick={handleWhatsApp}>
                    {ContactData.whatsapp}
                </Typography>
                {ContactData.businessHours.map((hours, index) => (
                    <Typography key={index} sx={{ ...listItemStyle, fontSize: { xs: 16, md: 24, lg: 34, xl: 48 } }}>
                        {hours}
                    </Typography>
                ))}
                <Divider variant='middle' sx={{ my: 4, bgcolor: 'black' }} />
                <ProductCTA />
            </Box>
        </Container>
    );
};

const ContactUs = () => {
    return (
        <>
            <Contact />
        </>
    );
};

export default ContactUs;
