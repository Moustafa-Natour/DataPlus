// AnimatedLink.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { rightLink } from '../utils/StyleSx';

const AnimatedLink = ({ to, children }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ display: 'inline-block' }}
        >
            <Link
                to={to}
                style={rightLink
                }
            >
                {children}
            </Link>
        </motion.div>
    );
};

export default AnimatedLink;
