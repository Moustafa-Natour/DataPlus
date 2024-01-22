import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { AppBarSx, gradientAnimation } from '../utils/StyleSx';

function AppBar(props) {
    return <MuiAppBar elevation={1} sx={{
        ...gradientAnimation,
        '@keyframes gradient-animation': {
            '0%': {
                backgroundPosition: '0% 50%',
            },
            '100%': {
                backgroundPosition: '100% 50%',
            },
        },
    }} position="fixed" {...props} />;
}
export default AppBar;

