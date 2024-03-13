export const gradientAnimation = {
    background: `hsl(0, 0%, 0%)`,
    backgroundSize: '180% 180%',
};

export const AppFooterSx = {
    display: 'flex',
    bottom: 0,
    background: `hsl(0, 0%, 0%)`,
    color: 'white',
    textAlign: 'center',
};


export const ContainerSx = {
    background: 'linear-gradient(290deg, #060681,#065B6A,#1d5293,#00a0e5,#C87878,#55F5F5,#FF3E4D,#833AB4,#40a8c4,#00a0e5,#031421)', // Add more colors as needed
    animation: 'gradient-animation 5s infinite ease',
    backgroundSize: '120% 120%',
    maxWidth: '100% !important',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    p: 2
};

export const CardSx = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',  // Increase the scale on hover
    },
    '&:focus': {
        transform: 'scale(1.02)',  // Increase the scale on focus
    },
    cursor: 'pointer',  // Set cursor to pointer on hover
};
//Footer page custom components Sx
export const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff', // Default icon color
    mr: 0.5,
    borderRadius: '50%',
    transition: 'background-color 0.3s',
    '&:hover': {
        backgroundColor: '#13489e', // Default background color on hover

    },
};

export const facebookIconStyle = {
    background: 'linear-gradient(45deg, #1877f2, #3b5998)', // Facebook-like gradient
    '&:hover': {
        background: 'linear-gradient(45deg, #13489e, #3b5998)', // Adjusted gradient on hover
    },
};

export const whatsappIconStyle = {
    background: 'linear-gradient(45deg, #25D366, #128C7E)', // WhatsApp-like gradient
    transition: 'background 0.3s',
    '&:hover': {
        background: 'linear-gradient(45deg, #128C7E, #075e04,#065e54)', // Adjusted gradient on hover
    },
};

export const instagramIconStyle = {
    background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)', // Instagram-like gradient
    transition: 'background 0.3s',
    '&:hover': {
        background: 'linear-gradient(90deg, #833AB4, #C13584, #FD1D1D)', // Adjusted gradient on hover
    },
};
export const telegramIconStyle = {
    background: 'linear-gradient(45deg, #0088cc, #0088cc, #0088cc)', // Telegram-like gradient
    transition: 'background 0.3s',
    cursor: 'pointer',
    '&:hover': {
        background: 'linear-gradient(45deg, #0088cc, #00c8cc, #008ccc)', // Adjusted gradient on hover
    },
};


export const BoxSx = {
    border: '15px solid #ffffff',
    backgroundColor: '#fff',
    borderRadius: '69px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    height: '95%',
    width: '95%',

}

export const TypographyHeaderSx = {
    textAlign: 'center',
    fontSize: { xs: 36, md: 48, lg: 60, xl: 72 },
    fontWeight: 'bold',
    my: 4,
    letterSpacing: 1,
    lineHeight: 2,
    position: 'relative',
    '&:after': {
        content: "''",
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '4mm',
        background: 'linear-gradient(290deg, #060681,#065B6A,#1d5293,#00a0e5,#C87878,#55F5F5,#FF3E4D,#833AB4,#40a8c4,#00a0e5,#031421)', // Adjust colors as needed
    },
};

export const TypographyStyle = {
    textAlign: 'left',
    fontSize: { xs: 10, md: 15, lg: 20, xl: 30 },
    my: 4,
    letterSpacing: 1.2,
    lineHeight: 2,
}

export const rightLink = {
    fontSize: { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 },
    fontWeight: 'bold',
    lineHeight: 2,
    '&:hover': {
        color: 'common.white !important',
        textDecoration: 'none',
        transform: 'scale(1.015)', // Scale the link slightly on hover

    },
    '&:active': {
        color: 'common.white !important',
        textDecoration: 'none',
    },
    transition: 'color 0.3s ease-in-out', // Add smooth color transition
    cursor: 'pointer', // Change cursor on hover
    padding: '4px', // Add padding for better click area

};
export const menuStyle = {
    backgroundColor: '#58a0fa', // Dark background color
    borderRadius: '6px', // Rounded corners
    boxShadow: '5px 5px 10px 5px rgba(0, 0, 0, 0.2)', // Box shadow for depth
};

//Contact us List :
export const listItemStyle = {
    display: 'block',
    my: 3,
    textAlign: 'left',
    fontSize: { xs: 16, md: 24, lg: 30, xl: 45 },
    textDecoration: 'none',
    letterSpacing: 0.6,
    lineHeight: 2.5,
    cursor: 'pointer',
    color: 'text.primary',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
        color: 'primary.main',
    },
};

export const ButtonSx = {

}

export const PaperSx = {

}


export const ToolbarSx = {

}
