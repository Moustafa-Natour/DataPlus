import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Markdown from '../../../components/Markdown';
import Typography from '../../../components/Typography';
import withRoot from '../../../withRoot';
import privacy from './privacy.md';

function Privacy() {
    return (
        <React.Fragment>
            <Container>
                <Box sx={{ mt: 7, mb: 12 }}>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        Privacy
                    </Typography>
                    <Markdown>{privacy}</Markdown>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default withRoot(Privacy);