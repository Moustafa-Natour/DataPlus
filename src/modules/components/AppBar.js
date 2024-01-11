import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';

function AppBar(props) {
    return <MuiAppBar elevation={15} sx={{ bgcolor: '#28282a', opacity: 0.9 }} position="fixed" {...props} />;
}

export default AppBar;