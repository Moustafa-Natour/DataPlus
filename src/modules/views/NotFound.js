import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Container } from '@mui/material';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';

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
            <AppAppBar />
            <Container className={classes.container}>
                <Typography className={classes.text}>404 - Page Not Found</Typography>
            </Container>
            <AppFooter className={classes.footer} />
        </div>
    );
};

export default NotFound;
