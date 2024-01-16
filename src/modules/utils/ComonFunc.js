export const handlePhoneCall = () => {
    const phoneNumber = '+96101818422';
    window.location.href = `tel:${phoneNumber}`;
};
export const handleWhatsApp = () => {
    const phoneNumber = '+96170318228';
    const message = 'Hello! I have a question!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};
export const handleEmail = () => {
    const email = 'mk@datapluslb.net';
    window.location.href = `mailto:${email}`;
}
export const handlePageChange = (url) => {
    if (url === 'Fb') {
        url = 'https://www.facebook.com/datap';
    } else if (url === 'Ig') {
        url = 'https://www.instagram.com/dataplus.sarl';
    }
    window.open(url, '_blank');
};

export const scrollToSection = (section) => {
    // Find the second section by its ID or another identifier
    const secondSection = document.getElementById(section); // Replace 'second-section' with the actual ID or identifier of your second section
    if (secondSection) {
        // Scroll to the second section
        secondSection.scrollIntoView({ behavior: 'smooth' });
    }
};