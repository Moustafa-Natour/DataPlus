import * as React from 'react';
import PropTypes from 'prop-types';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { BoxSx } from '../utils/StyleSx'; // Import BoxSx from StyleSx

const BoxRoot = styled(MuiBox, {
    shouldForwardProp: (prop) => prop !== 'background' && prop !== 'padding',
})(({ theme }) => ({
    ...BoxSx, // Apply the BoxSx styles
}));

function Box(props) {
    const { classes, className, ...other } = props;

    return (
        <BoxRoot
            className={className}
            {...other}
        />
    );
}

Box.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Box;
