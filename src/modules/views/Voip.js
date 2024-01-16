import React from 'react'
import AppAppBar from './AppAppBar'
import AppFooter from './AppFooter'
import { Container, Typography, Box } from '@mui/material'
import { BoxSx, ContainerSx, TypographyHeaderSx } from '../utils/StyleSx'


let VoipView = () => {

    return (
        <>
            <AppAppBar />
            <Container sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h1" component="h1" sx={TypographyHeaderSx}>
                        Data Plus Voice Over IP
                    </Typography>
                    <Typography >
                        Data Plus Voice Over IP is a secure, reliable, and fast Voice Over IP service that allows you to access the internet from anywhere in the world.
                    </Typography>
                </Box>
            </Container>
            <AppFooter />
        </>
    )
}
const Voip = () => {
    return (
        <VoipView />
    )
}

export default Voip