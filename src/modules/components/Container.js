import * as React from 'react';
import PropTypes from 'prop-types';
import MuiContainer from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { ContainerSx } from '../utils/StyleSx'; // Import ContainerSx from StyleSx

const ContainerRoot = styled(MuiContainer, {
    shouldForwardProp: (prop) => prop !== 'background' && prop !== 'padding',
})(({ theme }) => ({
    ...ContainerSx, // Apply the ContainerSx styles
}));

function Container(props) {
    const { classes, className, ...other } = props;

    return (
        <ContainerRoot
            className={className}
            {...other}
        />
    );
}

Container.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
    disableGutters: PropTypes.bool,
    fixed: PropTypes.bool,
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
};

export default Container;
