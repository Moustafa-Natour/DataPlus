import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';

function AppBar(props) {
    return <MuiAppBar elevation={1} sx={{ backgroundColor: '#1a1919', opacity: 1 }} position="fixed" {...props} />;
}
export default AppBar;

