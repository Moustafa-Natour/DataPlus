import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import curvyLinesImage from '../../assets/images/productCurvyLines.png';
import { scrollToSection, handleEmail } from '../../utils/ComonFunc';
import { motion } from 'framer-motion';
import contactImg from "../../assets/logo/contact.jpg";

function ProductSmokingHero() {
    const arrowRef = useRef(null);

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
                src={contactImg}
                alt="Contact us"
                sx={{ my: 2, objectFit: 'contain', width: '90%', height: '90%', borderRadius: 7 }}

            />
            <Button
                onClick={handleEmail}
                sx={{
                    border: '4px solid currentColor',
                    borderRadius: 0,
                    height: 'auto',
                    py: 2,
                    px: 5,
                    my: 1,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.02)',  // Increase the scale on hover
                    },
                    '&:focus': {
                        transform: 'scale(1.02)',  // Increase the scale on focus
                    },
                }}
            >

                <Typography variant="h4" component="span">
                    Got any questions? Need help?
                </Typography>
            </Button>
            <Box
                component="img"
                src={require('../../assets/images/productBuoy.png')}
                alt="buoy"
                sx={{ width: 60 }}
            />
            <Box
                component={motion.img}
                ref={arrowRef}
                src={require('../../assets/images/arrow.png')}
                height="16"
                width="12"
                alt="arrow up"
                align="center"
                sx={{
                    my: 2,
                    transform: 'rotate(180deg)',
                    cursor: 'pointer',
                }}
                onClick={() => scrollToSection('StoreVideo')}
                initial={{ scale: 1, rotate: 180 }}
                whileHover={{ scale: 1.5, rotate: 180 }}
                transition={{ duration: 0.5 }}
            />
        </Container>
    );
}

export default ProductSmokingHero;