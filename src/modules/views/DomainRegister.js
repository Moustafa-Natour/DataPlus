import React from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Container, Typography, Box, Button } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx, TypographyStyle } from '../utils/StyleSx';
import { handleWhatsApp } from '../utils/ComonFunc';

const DomainRegisterView = () => {
    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Welcome to Data Plus Domain Registration
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Elevate your online presence with Data Plus Domain Registration — a secure, reliable, and swift service that empowers you to establish your unique identity on the internet from anywhere in the world.
                    </Typography>
                    <Typography sx={TypographyStyle}>
                        Why Choose Data Plus Domain Registration?
                    </Typography>
                    <ul>
                        <li><strong>Secure and Reliable:</strong> Our robust security measures ensure that your domain registration is safe and protected.</li>
                        <li><strong>Swift Service:</strong> Experience quick and efficient domain registration to kickstart your online journey promptly.</li>
                        <li><strong>Global Accessibility:</strong> Register and manage your domains effortlessly, enhancing your digital footprint globally.</li>
                        <li><strong>Expert Support:</strong> Our dedicated support team is ready to assist you at every step, ensuring a seamless experience.</li>
                    </ul>
                    <Typography sx={TypographyStyle}>
                        Whether you are a small business owner, entrepreneur, or an established enterprise, Data Plus Domain Registration is tailored to meet your specific needs. Take control of your online identity and build a memorable brand presence today.
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button onClick={() => handleWhatsApp('Hello, I would like to know more about Data Plus Domain Registration Service')} variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>
            <AppFooter />
        </>
    );
};

const DomainRegister = () => {
    return <DomainRegisterView />;
};

export default DomainRegister;
