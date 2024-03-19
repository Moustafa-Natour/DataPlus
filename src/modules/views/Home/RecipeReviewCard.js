import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ApplyIcon from '@mui/icons-material/AssignmentTurnedIn';
import CompanyIcon from '../../assets/logo/favicon.ico';


const ApplyButton = styled(IconButton)({
    color: '#1976d2', // Adjust color as needed
});

const RecipeReviewCard = ({ title, subheader, image, description, handleApply }) => {
    return (
        <Card sx={{ textAlign: 'center', margin: 'auto' }}>
            <CardHeader
                avatar={<Avatar src={CompanyIcon} alt="Company Logo" aria-label="Company Logo" />}
                title={title}
                subheader={subheader}
            />
            <CardMedia
                component="img"
                height="auto"
                image={image}
                alt="Offer"
            />
            <CardContent>
                <Typography variant="body2" align='center' color="text.secondary" sx={{ fontSize: 14 }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
                <ApplyButton aria-label="Apply" onClick={handleApply}>
                    <ApplyIcon />
                </ApplyButton>
            </CardActions>
        </Card>
    );
}

export default RecipeReviewCard;
