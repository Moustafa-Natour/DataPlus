// Speedometer.js
import React from 'react';
import Speedometer, { Background, Arc, Needle, Progress, Marks, DangerPath } from 'react-speedometer';
import { Container } from '@mui/material';

const SpeedometerComponent = ({ speed, animatedSpeed, tier, handleOpenFullScreenDescription }) => {
    return (
        <>
            <Container
                style={{
                    background: 'linear-gradient(45deg, #00a0e5, #0090d6, #0077bd, #C13584,#5851DB, #833AB4)',
                    padding: '14px',
                    borderRadius: '50%',
                    width: 'fit-content', // Adjust the width and height to fit your design
                    height: 'fit-content',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Speedometer
                    height={speed?.height}
                    width={speed?.width}
                    value={animatedSpeed[tier.title] || 0}
                    max={20}
                    fontFamily='squada-one'
                    needleHeightRatio={0.7}
                    needleColor="#0084ff"
                    startColor="#0084ff"
                    endColor="#ff0000"
                    currentValueText={tier.speed + 'MB/s'}
                    ringWidth={15}
                    needleTransitionDuration={3000}
                    needleTransition="easeElastic"
                    textColor="#333"
                    valueFormat="d"
                    customSegmentStops={[0, 5, 10, 15, 20]}
                    customSegmentLabels={[
                        { text: '0 MB/s', position: 'OUTSIDE' },
                        { text: '5 MB/s', position: 'OUTSIDE' },
                        { text: '10 MB/s', position: 'OUTSIDE' },
                        { text: '15 MB/s', position: 'OUTSIDE' },
                        { text: '20 MB/s', position: 'OUTSIDE' },
                    ]}
                    marks={{
                        0: '0 MB/s',
                        5: '5 MB/s',
                        10: '10 MB/s',
                        15: '15 MB/s',
                        20: '20 MB/s',
                    }}
                >
                    <Background />
                    <Arc arcWidth={12} />
                    <Needle
                        baseOffset={55}
                        circleRadius={25}
                        needleHeightRatio={0.7}
                        color="cyan"
                        circleColor='#1d5293'
                    />
                    <DangerPath arcWidth={12} angle={100} color="red" offset={-7} />
                    <Progress arcWidth={12} />
                    <Marks step={1} />
                </Speedometer>
            </Container>
        </>
    );
};

export default SpeedometerComponent;
