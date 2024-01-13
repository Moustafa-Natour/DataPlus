export const AppBarSx = {
    backgroundColor: '#1a1919',
    opacity: 1,
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

export const AppFooterSx = {
    display: 'flex',
    bottom: 0,
    bgcolor: '#050505',
    color: 'white',
    opacity: 1,
    textAlign: 'center'
}

//Footer custom components Sx
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
    backgroundColor: '#1877f2', // Facebook blue color
};

export const whatsappIconStyle = {
    backgroundColor: '#25D366', // WhatsApp green color
    '&:hover': {
        backgroundColor: '#128C7E', // Darker shade of WhatsApp green on hover
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
    my: 4,
    borderBottom: '4mm ridge #000000'
}

export const ButtonSx = {

}

export const PaperSx = {

}


export const ToolbarSx = {

}
