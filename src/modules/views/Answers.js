import React, { useState } from 'react';
import AppAppBar from './AppAppBar';
import AppFooter from './AppFooter';
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography, Container, Tabs, Tab } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FiberQuestionsAndAnswers = [
    {
        question: 'Can I use my own router for Fiber Internet?',
        answer: 'Yes, in most cases, you can use your own router with Fiber Internet. Ensure that the router is compatible with fiber-optic technology and supports the required specifications.',
    },
    {
        question: 'What makes Fiber Internet more reliable than other types?',
        answer: 'Fiber Internet is more reliable because it uses fiber-optic cables, which are less susceptible to interference and signal loss. This results in consistent and stable internet connections.',
    },
    {
        question: 'Is Fiber Internet suitable for large households or businesses?',
        answer: 'Yes, Fiber Internet is well-suited for large households and businesses. Its high-speed capabilities and low latency make it ideal for handling multiple devices and demanding online activities simultaneously.',
    },
    {
        question: 'Do I need a professional technician for Fiber Internet installation?',
        answer: 'While some internet service providers offer self-installation kits, professional technicians are recommended for optimal setup. They can ensure proper installation and address any technical requirements.',
    },
    {
        question: 'Can I get Fiber Internet without a contract?',
        answer: 'The availability of contract-free options for Fiber Internet may vary among service providers. Check with your provider for information on contract terms and available subscription plans.',
    },
    {
        question: 'Are there any additional fees or hidden costs with Fiber Internet?',
        answer: 'Check with your internet service provider for a clear understanding of any additional fees or costs associated with Fiber Internet, such as installation fees, equipment charges, or service upgrades.',
    },
    {
        question: 'What happens in case of a fiber-optic cable cut or damage?',
        answer: 'Fiber-optic cable cuts are rare, but if they occur, service providers have redundancy measures to minimize disruptions. Technicians can promptly address and repair any damage to maintain service reliability.',
    },
    // Add more Fiber questions
]
const AdslQuestionsAndAnswers = [
    {
        question: 'Is ADSL available in rural areas?',
        answer: 'Availability in rural areas depends on the infrastructure. Some rural areas may have ADSL coverage, while others may rely on alternative technologies. Contact your internet service provider for specific details.',
    },
    {
        question: 'What is the average setup time for ADSL installation?',
        answer: 'The setup time for ADSL installation varies, but it typically takes a few days to a couple of weeks. Factors such as service provider processes and availability in your area contribute to the installation timeline.',
    },
    {
        question: 'Can I use Wi-Fi with ADSL?',
        answer: 'Yes, you can use Wi-Fi with ADSL. After connecting your ADSL modem, you can set up a Wi-Fi network within your home to enable wireless internet access on multiple devices.',
    },
    {
        question: 'Are there any data usage limits with ADSL plans?',
        answer: 'Some ADSL plans may have data usage limits or data caps. It is essential to check with your internet service provider to understand any limitations on data usage and explore plans that suit your needs.',
    },
    {
        question: 'What should I do if I experience slow internet speeds with ADSL?',
        answer: 'If you experience slow internet speeds, you can troubleshoot by checking your modem, ensuring proper filters on telephone lines, and contacting your service provider for assistance. Factors like network congestion and line quality can also impact speed.',
    },
    {
        question: 'Can I upgrade my ADSL plan for higher speeds?',
        answer: 'Yes, many internet service providers offer different ADSL plans with varying speeds. You can contact your provider to inquire about available plans and the possibility of upgrading for faster speeds.',
    },
    {
        question: 'What security measures should I take for my ADSL connection?',
        answer: 'To secure your ADSL connection, use a strong Wi-Fi password, enable WPA or WPA2 encryption, and regularly update your modems firmware.Additionally, consider using a firewall and antivirus software on connected devices.',
    },
    // Add more ADSL questions and answers as needed
];

const FqaQuestionsAndAnswers = [
    {
        question: 'What is the purpose of this website?',
        answer: 'The purpose of this website is to provide information about our services and answer common questions related to internet connectivity, Fiber, ADSL, and other relevant topics.',
    },
    {
        question: 'How can I contact customer support?',
        answer: 'For any inquiries or assistance, you can contact our customer support team through the provided contact channels on our website. We are here to help!',
    },
    // Add more FQA questions and answers as needed
];


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
            case 'fqa':
                return FqaQuestionsAndAnswers;
            default:
                return [];
        }
    };

    return (
        <>

            <AppAppBar />
            {/* <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh', // Set minimum height to full viewport height
                }}
            > */}
            <Container fixed
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '75.9dvh', // Set minimum height to full viewport height
                }}>
                <Box sx={{ my: 2 }}>
                    <Tabs
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Fiber" value="fiber" />
                        <Tab label="ADSL" value="adsl" />
                        <Tab label="FQA" value="fqa" />
                    </Tabs>
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
                        {selectedCategory === 'fiber'
                            ? 'Fiber Internet FAQs'
                            : selectedCategory === 'adsl'
                                ? 'ADSL FAQs'
                                : 'Frequently Asked Questions (FQA)'}
                    </Typography>
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
            {/* </Box> */}
            <AppFooter />

        </>
    );
};

const Answers = () => {
    return <AnswersView />;
};

export default Answers;




