import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { AppBarSx } from '../utils/StyleSx';

function AppBar(props) {
    return <MuiAppBar elevation={1} sx={AppBarSx} position="fixed" {...props} />;
}
export default AppBar;

