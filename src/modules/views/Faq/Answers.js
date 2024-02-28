import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box as MuiBox, Typography, Tabs, Tab } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TypographyHeaderSx } from '../../utils/StyleSx';
import { FiberQuestionsAndAnswers, AdslQuestionsAndAnswers, FqaQuestionsAndAnswers } from '../../data/AnswersData';
import Container from '../../components/Container';
import Box from '../../components/Box';

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
            <Container>
                <Box >
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
                    <MuiBox
                        sx={{
                            border: '2px solid #e0e0e0',
                            borderRadius: '12px',
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                            p: 4,
                            mb: 5,
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
                    </MuiBox>
                </Box>
            </Container>

        </>
    );
};

const Answers = () => {
    return <AnswersView />;
};

export default Answers;




