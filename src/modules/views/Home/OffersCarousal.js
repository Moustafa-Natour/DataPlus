import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import RecipeReviewCard from './RecipeReviewCard'; // Import RecipeReviewCard component
import Mothersimg from '../../assets/images/MothersdayOffer.jpg';
import Ramadanimg from '../../assets/images/RamadanOffer.jpg';
import { handleWhatsApp } from '../../utils/ComonFunc';
import SamaPost from '../../assets/images/SamaPost.jpg';
import "./Carousal.css";

const mothersDayDescription = `
    🌸💗لإنك الأغلى ع قلبنا\n
    💗مع كل اشتراك انترنت خلال ٢١-٢٢ آذار الشهر التركيب علينا\n
    📍Barbour - Bachir Jomblat street\n
    For more Info Contact us
`;



const ramadanDescription = `
    خلي خيرك يعمّ على غيرك\n
    مع كل اشتراك خلال شهر رمضان المبارك، شهر انترنت ببلاش\n
    📍Barbour - Bachir Jomblat street\n
    For more Info Contact us
`;

const samaDescription = `
   ☑️ ببيتك SAMA صارت ال\n
    Your ultimate IPTV platform in Lebanon\n
    Explore SAMA Flix now!\n
    📍Barbour - Bachir Jomblat street\n
    For more Info Contact us
`;


const images = [
    {
        label: 'Mothers Day',
        imgPath: Mothersimg,
        title: 'Happy Mothers Day',
        subheader: '18 March 2024',
        description: mothersDayDescription,
    },
    {
        label: 'Ramadan Karim',
        imgPath: Ramadanimg,
        title: 'Ramadan Karim',
        subheader: '10 March 2024',
        description: ramadanDescription,
    },
    {
        label: 'SamaFlix',
        imgPath: SamaPost,
        title: 'SamaFlix',
        subheader: '14 March 2024',
        description: samaDescription,
    },

];

function OffersCarousal() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevActiveStep) =>
                prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
            );
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [maxSteps]);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                autoPlay={true}
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <RecipeReviewCard
                                title={step.title}
                                subheader={step.subheader}
                                image={step.imgPath}
                                description={<pre>{step.description}</pre>}
                                handleApply={() => handleWhatsApp(`Hello, I would like to get more details about ${step.label} Offer`)}
                            />
                        ) : null}
                    </div>
                ))}
            </SwipeableViews>
            <MobileStepper
                variant='dots'
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
            />
        </Box>
    );
}

export default OffersCarousal;
