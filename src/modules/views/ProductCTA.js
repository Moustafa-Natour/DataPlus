import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { Card, CardHeader, CardMedia } from '@mui/material';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

function ProductCTA() {
    const [open, setOpen] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container component="section" sx={{ display: 'flex' }}>
            <Grid container>
                <Grid item xs={12} md={12} sx={{ zIndex: 1 }}>
                    <Box
                        sx={{
                            background: 'url(https://mui.com/static/themes/onepirate/productCTAImageDots.png)',
                            display: 'flex',
                            justifyContent: 'center',
                            py: 1,
                            px: 1,
                        }}
                    >       <Card
                        sx={{
                            width: '100%',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            background: 'url(/https://mui.com/static/themes/onepirate/appCurvyLines.png)'
                        }}>
                            <CardHeader
                                align='center'
                                title="Data Plus S.A.R.L"
                                subheader="Location"
                                sx={{
                                    background: 'white',
                                    color: 'black',
                                    borderRadius: '15px 15px 0px 0px'
                                }} />
                            <CardMedia
                                component="iframe"
                                title="Data Plus S.A.R.L"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13249.479542635114!2d35.4963574!3d33.8801265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f172750956e49%3A0x630c9a276951703e!2sData%20Plus%20S.A.R.L!5e0!3m2!1sen!2slb!4v1703277847398!5m2!1sen!2slb"
                                width="800"
                                height="600"
                                allowFullScreen=""
                                loading="lazy"
                                sx={{ border: 0 }}
                            />
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Container>




    );
}

export default ProductCTA;