import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import curvyLinesImage from '../assets/images/productCurvyLines.png';
import { scrollToSection } from '../utils/ComonFunc';

function ProductSmokingHero() {
    const handleEmailButtonClick = () => {
        const emailAddress = 'mk@datapluslb.net';
        const subject = 'Question/Help';
        const body = 'Hello, I have a question and need help.';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the default email client
        window.location.href = mailtoLink;
    };
    return (
        <Container
            component="section"
            sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4,
                position: 'relative',
                backgroundImage: `url(${curvyLinesImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 'auto',
            }}
        >

            <Box
                component="img"
                src="/contact2.jpg"
                alt="Contact us"
                sx={{ my: 2, objectFit: 'contain', width: '90%', height: '90%', borderRadius: 7 }}

            />
            <Button
                onClick={handleEmailButtonClick}
                sx={{
                    border: '4px solid currentColor',
                    borderRadius: 0,
                    height: 'auto',
                    py: 2,
                    px: 5,
                    my: 1,
                }}
            >
                <Typography variant="h4" component="span">
                    Got any questions? Need help?
                </Typography>
            </Button>
            <Box
                component="img"
                src={require('../assets/images/productBuoy.png')}
                alt="buoy"
                sx={{ width: 60 }}
            />
            <Box
                component='img'
                src={require('../assets/images/arrow.png')}
                height="16"
                width="12"
                alt="arrow up"
                align="center"
                sx={{ my: 2, transform: 'rotate(180deg)' }}
                onClick={() => scrollToSection('StoreVideo')}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            />
        </Container>
    );
}

export default ProductSmokingHero;