import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import StoreVideo from './StoreVideo.mp4';
import Typography from '../components/Typography';
import { useTheme } from '@mui/material/styles';
import { scrollToSection } from '../utils/ComonFunc';

const ProductHeroLayoutRoot = styled(motion.section)(({ theme }) => ({
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: 'fit-content',
    width: '100%',
    paddingBottom: '0.5rem',

    '& video': {
        position: 'absolute',
        objectFit: 'fill',
        width: '100%',
        height: '100%',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        transform: 'scale(1.1)',
        transition: 'transform 0.5s ease-in-out',
    },
}));

function ProductHeroLayout(props) {
    const { sxBackground, children } = props;
    const theme = useTheme();
    const navigate = useNavigate();
    const arrowRef = useRef(null);


    useEffect(() => {
        // Trigger animation when the component mounts
        if (arrowRef.current) {
            arrowRef.current.style.opacity = 1;
        }
    }, []);

    return (
        <ProductHeroLayoutRoot
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <video autoPlay muted loop playsInline>
                <source src={StoreVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Container
                sx={{
                    mt: 3.56,
                    mb: 1,
                    padding: { xs: 1, sm: 10 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    '@media (max-width: 600px)': {
                        mt: 0.55,
                        height: 'auto',
                        width: 'auto',
                    },
                }}
            >
                <Typography color='#fff5f8' align="center" variant="h1" marked="center" sx={{ my: 2 }}>
                    DATA PLUS
                </Typography>
                {children}
                <Box
                    component={motion.img}
                    ref={arrowRef}
                    src={require('../assets/images/arrow.png')}
                    height="16"
                    width="12"
                    alt="arrow down"
                    align="center"
                    sx={{
                        my: 4,
                        cursor: 'pointer',
                        opacity: 0,
                    }}
                    onClick={() => scrollToSection('AppFooter')}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.5 }}
                />
            </Container>
        </ProductHeroLayoutRoot>
    );
}

ProductHeroLayout.propTypes = {
    children: PropTypes.node,
    sxBackground: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default ProductHeroLayout;
