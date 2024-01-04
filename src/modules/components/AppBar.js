import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';

function AppBar(props) {
    return <MuiAppBar elevation={5} sx={{ bgcolor: '#28282a' }} position="fixed"  {...props} />;
}

export default AppBar;