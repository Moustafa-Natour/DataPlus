import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ApplyIcon from '@mui/icons-material/AssignmentTurnedIn'; // Assuming this is the icon for "apply"
import CompanyIcon from '../../assets/logo/favicon.ico';
import Mothersimg from '../../assets/images/MothersdayOffer.jpg';
import { handleWhatsApp } from '../../utils/ComonFunc';
const ApplyButton = styled(IconButton)({
    color: '#1976d2', // Adjust color as needed
});

export default function RecipeReviewCard({ title }) {
    const handleApplyClick = () => {
        // Handle apply action here
        console.log('Apply clicked');
    };

    return (
        <Card sx={{ textAlign: 'center', margin: 'auto' }}>
            <CardHeader
                avatar={
                    <Avatar src={CompanyIcon} alt="Company Logo" aria-label="Company Logo" />
                }
                title={title}
                subheader="March 18, 2024"
            />
            <CardMedia
                component="img"
                height="auto"
                image={Mothersimg}
                alt="Mothers Day Offer"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Enjoy our special offer for Mothers Day.
                    Free installation and easy setup.
                    Hurry up and apply now!
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
                <ApplyButton aria-label="Apply for internet" onClick={() => handleWhatsApp('Hello,I would like to get more details about the Mothers Day Offer')}>
                    <ApplyIcon />
                </ApplyButton>
            </CardActions>
        </Card>
    );
}
