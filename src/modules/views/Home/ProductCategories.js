import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';


const FullScreenImageOverlay = styled('div')({
    position: 'fixed',
    top: 35,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
});

const FullScreenImage = styled('img')({
    maxWidth: '90%',
    maxHeight: '90%',
    objectFit: 'contain',
});

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    border: '1px solid',
    borderRadius: 1,
    height: 500,
    [theme.breakpoints.down('md')]: {
        width: '100% !important',
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageTitle': {
        border: '4px solid currentColor',
    },
    '& .imageTitle': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
        cursor: 'pointer',
    },
    '& .imageMarked': {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const images = [
    {
        url: '/assets/images/D5mb.png',
        title: '5 Mega',
        width: 500,
    },
    {
        url: '/assets/images/D6mb.png',
        title: '6 Mega',
        width: 500,
    },
    {
        url: '/assets/images/D8mb.png',
        title: '8 Mega',
        width: 500,
    },
    {
        url: '/assets/images/D10mb.png',
        title: '10 Mega',
        width: 500,
    },
    {
        url: '/assets/images/D12mb.png',
        title: '12 Mega',
        width: 500,
    },
    {
        url: '/assets/images/D20mb.png',
        title: '20 Mega',
        width: 500,
    },
    {
        url: '/assets/images/Ddedicated.png',
        title: 'Dedicated',
        width: 500,
    },
];

const ProductCategories = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openFullScreen = (url) => {
        setSelectedImage(url);
    };

    const closeFullScreen = () => {
        setSelectedImage(null);
    };

    return (
        <Container component="section" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h3" marked="center" align="center" component="h3">
                {'Experience a spectrum of internet solutions designed to various profiles and preferences. \n'}
                {'Our commitment is to provide seamless connectivity that aligns with your unique requirements'}
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: '4vw', justifyContent: 'center', alignItems: 'center' }}>
                {images.map((image) => (
                    <ImageIconButton
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 50%',
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'common.white',
                            }}
                            onClick={() => openFullScreen(image.url)}
                        >
                            <Typography
                                component="h3"
                                variant="h6"
                                color="inherit"
                                className="imageTitle"
                            >
                                {image.title}
                                <div className="imageMarked" />
                            </Typography>
                        </Box>
                    </ImageIconButton>
                ))}
            </Box>

            {selectedImage && (
                <FullScreenImageOverlay onClick={closeFullScreen}>
                    <FullScreenImage src={selectedImage} alt="Full Screen" />
                </FullScreenImageOverlay>
            )}
        </Container>
    );
};

export default ProductCategories;
