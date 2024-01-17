export const AppBarSx = {
    backgroundColor: '#1a1919',
    opacity: 1,
}
export const AppFooterSx = {
    display: 'flex',
    bottom: 0,
    bgcolor: '#050505',
    color: 'white',
    opacity: 1,
    textAlign: 'center'
}
export const ContainerSx = {
    bgcolor: '#1d5293',
    maxWidth: '100% !important',
    minHeight: '100svh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};
export const CardSx = {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',  // Increase the scale on hover
    },
    '&:focus': {
        transform: 'scale(1.05)',  // Increase the scale on focus
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
    mr: 1,
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
        background: 'linear-gradient(45deg, #128C7E, #075e54)', // Adjusted gradient on hover
    },
};

export const instagramIconStyle = {
    background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)', // Instagram-like gradient
    transition: 'background 0.3s',
    '&:hover': {
        background: 'linear-gradient(45deg, #833AB4, #C13584, #FD1D1D)', // Adjusted gradient on hover
    },
};

export const BoxSx = {
    border: '2px solid #e0e0e0',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    p: 4,
    my: 2,
    height: '100%',
}

export const TypographyHeaderSx = {
    textAlign: 'center',
    fontSize: { xs: 36, md: 48, lg: 60, xl: 72 },
    fontWeight: 'bold',
    my: 4,
    letterSpacing: 1,
    lineHeight: 2,
    borderBottom: '4mm ridge #58a0fa'
}
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
    },
    '&:active': {
        color: 'common.white !important',
        textDecoration: 'none',
    }

};
export const menuStyle = {
    backgroundColor: '#58a0fa', // Dark background color
    borderRadius: '8px', // Rounded corners
    boxShadow: '5px 5px 10px 5px rgba(0, 0, 0, 0.2)', // Box shadow for depth
};

//Contact us List :
export const listItemStyle = {
    display: 'block',
    my: 3,
    textAlign: 'left',
    fontSize: { xs: 16, md: 24, lg: 30, xl: 45 },
    textDecoration: 'none',
    letterSpacing: 1,
    lineHeight: 1.5,
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
