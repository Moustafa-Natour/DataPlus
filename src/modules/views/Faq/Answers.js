import React, { useState } from 'react';
import AppAppBar from '../AppBar/AppAppBar';
import AppFooter from '../AppBar/AppFooter';
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography, Container, Tabs, Tab } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BoxSx, ContainerSx, TypographyHeaderSx } from '../../utils/StyleSx';
import { FiberQuestionsAndAnswers, AdslQuestionsAndAnswers, FqaQuestionsAndAnswers } from '../../data/AnswersData';

const AnswersView = () => {
    const [selectedCategory, setSelectedCategory] = useState('fiber');
    const handleCategoryChange = (event, newValue) => {
        setSelectedCategory(newValue);
    };
    const getQuestionsAndAnswers = () => {
        switch (selectedCategory) {
            case 'fiber':
                return FiberQuestionsAndAnswers;
            case 'adsl':
                return AdslQuestionsAndAnswers;
            case 'faq':
                return FqaQuestionsAndAnswers;
            default:
                return [];
        }
    };
    return (
        <>
            <AppAppBar />
            <Container fixed sx={ContainerSx}>
                <Box sx={BoxSx}>
                    <Typography variant="h4" sx={TypographyHeaderSx}>
                        {selectedCategory === 'fiber'
                            ? 'Fiber Internet FAQs'
                            : selectedCategory === 'adsl'
                                ? 'ADSL FAQs'
                                : 'Frequently Asked Questions (FAQ)'}
                    </Typography>
                    <Tabs
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Fiber" value="fiber" />
                        <Tab label="ADSL" value="adsl" />
                        <Tab label="FAQ" value="faq" />
                    </Tabs>
                    <Box
                        sx={{
                            border: '2px solid #e0e0e0',
                            borderRadius: '12px',
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                            p: 4,
                        }}
                    >
                        {getQuestionsAndAnswers().map((qa, index) => (
                            <Accordion key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`${selectedCategory}-panel${index}-content`}
                                    id={`${selectedCategory}-panel${index}-header`}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        {qa.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body1">{qa.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Container>
            <AppFooter />

        </>
    );
};

const Answers = () => {
    return <AnswersView />;
};

export default Answers;




