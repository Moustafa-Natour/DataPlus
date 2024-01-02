import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

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
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
        >
            <Box
                component="img"
                src="/Contact2.jpg"
                alt="Contact us"
                sx={{ my: 2, objectFit: 'contain', width: '90%', height: '90%' }}

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
                src="https://mui.com/static/themes/onepirate/productBuoy.svg"
                alt="buoy"
                sx={{ width: 60 }}
            />
        </Container>
    );
}

export default ProductSmokingHero;