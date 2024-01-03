import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import StoreVideo from './StoreVideo.mp4';
import Typography from '../components/Typography';
import { useTheme } from '@mui/material/styles';



const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        height: '100%',
        minHeight: 500,
        maxHeight: 1300,
    },
    '& video': {
        position: 'absolute',
        objectFit: 'fill',
        width: '100%',
        height: '100%',
        zIndex: -1,
        top: 0,
        left: 0,
        transform: 'scale(1.1)', // Adjust the scale value for zoom-out effect
        transition: 'transform 0.5s ease-in-out', // Add transition for smooth effect
    },
}));

const Background = styled(Box)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
});

function ProductHeroLayout(props) {
    const { sxBackground, children } = props;
    const theme = useTheme();
    return (
        <ProductHeroLayoutRoot>
            <video autoPlay muted loop playsInline>
                <source src={StoreVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Container
                sx={{
                    mt: 10,
                    mb: 10,
                    padding: { xs: 1, sm: 10 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                    height: '100%',
                    width: '100%',
                    '@media (max-width: 600px)': {
                        mt: 10,
                        height: 'auto', // Adjust the height for smaller screens
                        width: 'auto', // Adjust the height for smaller screens
                    },
                }}
            >
                <Typography color="black" align="center" variant="h1" marked="center" sx={{ my: 2 }}>
                    DATA PLUS
                </Typography>

                {children}
                <Box
                    component="img"
                    src="https://mui.com/static/themes/onepirate/productHeroArrowDown.png"
                    height="16"
                    width="12"
                    alt="arrow down"
                    align="center"
                    sx={{
                        position: 'absolute',
                        bottom:
                            theme.breakpoints.down('xs') ? -30 :
                                theme.breakpoints.down('sm') ? -20 :
                                    theme.breakpoints.down('lg') ? -40 :
                                        theme.breakpoints.down('xl') ? -50 : 300,
                        mt: 2
                    }}
                />
            </Container>
        </ProductHeroLayoutRoot>

    );
}

ProductHeroLayout.propTypes = {
    children: PropTypes.node,
    sxBackground: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default ProductHeroLayout;
