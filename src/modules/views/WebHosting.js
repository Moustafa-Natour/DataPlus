import React from 'react'
import AppAppBar from './AppAppBar'
import AppFooter from './AppFooter'
import { Container, Typography, Box } from '@mui/material'
import { BoxSx, ContainerSx, TypographyHeaderSx } from '../utils/StyleSx'


let WebHostingView = () => {

    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Data Plus Web Hosting
                    </Typography>
                    <Typography >
                        Data Plus Web Hosting  is a secure, reliable, and fast web service that allows you to access your website from anywhere in the world.
                    </Typography>
                </Box>
            </Container>
            <AppFooter />
        </>
    )
}
const WebHosting = () => {
    return (
        <WebHostingView />
    )
}

export default WebHosting