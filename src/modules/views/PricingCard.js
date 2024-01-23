// PricingCard.js
import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, Box, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorder';
import SpeedometerComponent from './SpeedometerComponent';
import { CardSx } from '../utils/StyleSx';

const PricingCard = ({ tier, handleOpenFullScreenDescription, animatedSpeed, handleWhatsAppClick }) => {
    return (
        <Card sx={CardSx}>
            <CardHeader
                onClick={() => handleOpenFullScreenDescription(tier)}
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                action={tier.title === 'Enhanced Plan' ? <StarIcon /> : null}
                subheaderTypographyProps={{ align: 'center' }}
                sx={{
                    width: '100%',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                }}
            />
            <CardContent
                onClick={() => handleOpenFullScreenDescription(tier)}
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{
                        background: 'linear-gradient(45deg, #00a0e5, #0090d6, #0077bd, #C13584,#5851DB, #833AB4)',
                        borderRadius: '50%',
                        width: 'auto', // Adjust the width and height to fit your design
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}

                >
                    <SpeedometerComponent
                        animatedSpeed={animatedSpeed}
                        tier={tier}
                        handleOpenFullScreenDescription={handleOpenFullScreenDescription}
                    />
                </div>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, pb: 2, pt: 2 }}>
                    <Typography component="h6" variant="h6" color="text.primary">
                        {tier.price} L.B.P
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        /mo
                    </Typography>
                </Box>
                <ul>
                    {tier.description.map((line, index) => (
                        <Typography component="li" variant="subtitle1" align="center" key={index}>
                            {line}
                        </Typography>
                    ))}
                </ul>
            </CardContent>
            <CardActions>
                <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    onClick={() => handleWhatsAppClick(tier)}
                >
                    {tier.buttonText}
                </Button>
            </CardActions>
        </Card>
    );
};

export default PricingCard;
