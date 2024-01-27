import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, Box, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorder';
import SpeedometerComponent from './SpeedometerComponent';
import { CardSx } from '../utils/StyleSx';
import { motion } from 'framer-motion';

const PricingCard = ({ tier, handleOpenFullScreenDescription, animatedSpeed, handleWhatsAppClick }) => {
    return (
        <motion.div // Wrap the entire card with motion.div
            initial={{ opacity: 0, scale: 1 }} // Set initial animation properties
            animate={{ opacity: 1, scale: 1 }} // Set animation properties
            exit={{ opacity: 0, scale: 1 }} // Set exit animation properties
            transition={{ duration: 0.5 }} // Set animation duration
        >
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
                    <motion.div // Wrap the speedometer component with motion.div
                        initial={{ scale: 0 }} // Set initial animation properties
                        animate={{ scale: 1 }} // Set animation properties
                        transition={{ duration: 3, delay: 0.2 }} // Set animation duration and delay
                    >
                        <div
                            style={{
                                background: 'linear-gradient(45deg, #00a0e5, #0090d6, #0077bd, #C13584,#5851DB, #833AB4)',
                                borderRadius: '50%',
                                width: 'auto',
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
                    </motion.div>
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
        </motion.div>
    );
};

export default PricingCard;
