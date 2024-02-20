import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Container, Box } from '@mui/material';
import { BoxSx, ContainerSx, TypographyHeaderSx } from '../../utils/StyleSx';

const useStyles = styled((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // This ensures that the container takes at least 100% of the viewport height
    },
    container: {
        flex: 1, // This makes the container grow and take remaining space
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: '48px',
        fontWeight: 'bold',
        color: theme.palette.primary.main,
    },
    footer: {
        marginTop: 'auto', // This pushes the footer to the bottom
    },
}));

const NotFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container} sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography sx={TypographyHeaderSx} className={classes.text}>Data Plus Error 404 - Page Not Found</Typography>
                </Box>
            </Container>
        </div>
    );
};

export default NotFound;
