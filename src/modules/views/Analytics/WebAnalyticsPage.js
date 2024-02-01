import React, { useEffect, useState, useMemo } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Typography, Box } from '@mui/material';

// The same custom functions as before
const fetchData = async () => {
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Return some mock data
    return [
        { visitors: 1000, sessions: 800, pageViews: 3000, bounceRate: 0.2, avgTime: 5 },
        { visitors: 1200, sessions: 900, pageViews: 3200, bounceRate: 0.18, avgTime: 6 },
        { visitors: 900, sessions: 700, pageViews: 2800, bounceRate: 0.22, avgTime: 4 },
        { visitors: 1100, sessions: 850, pageViews: 3100, bounceRate: 0.19, avgTime: 5.5 },
        { visitors: 950, sessions: 750, pageViews: 2900, bounceRate: 0.21, avgTime: 4.5 },
    ];
};

// A custom function that calculates the average of an array of numbers
const average = arr => {
    if (arr.length === 0) return 0;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
};

// A custom function that formats a number as a percentage
const formatPercent = num => {
    return (num * 100).toFixed(2) + '%';
};

// A custom function that formats a number as a time in minutes and seconds
const formatTime = num => {
    const minutes = Math.floor(num);
    const seconds = Math.round((num - minutes) * 60);
    return `${minutes}m ${seconds}s`;
};


// A custom component that displays the web analytics data in a table using MUI components
export default function WebAnalyticsPage() {
    // The same state and useEffect hooks as before
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };
        getData();
    }, []);

    // The same useMemo hook as before
    const averages = useMemo(() => {
        return {
            visitors: average(data.map(d => d.visitors)),
            sessions: average(data.map(d => d.sessions)),
            pageViews: average(data.map(d => d.pageViews)),
            bounceRate: average(data.map(d => d.bounceRate)),
            avgTime: average(data.map(d => d.avgTime)),
        };
    }, [data]);

    // Return the JSX code that renders the table using MUI components
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Web Analytics Page
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Visitors</TableCell>
                        <TableCell>Sessions</TableCell>
                        <TableCell>Page Views</TableCell>
                        <TableCell>Bounce Rate</TableCell>
                        <TableCell>Average Time on Page</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((d, i) => (
                        <TableRow key={i}>
                            <TableCell>{d.visitors}</TableCell>
                            <TableCell>{d.sessions}</TableCell>
                            <TableCell>{d.pageViews}</TableCell>
                            <TableCell>{formatPercent(d.bounceRate)}</TableCell>
                            <TableCell>{formatTime(d.avgTime)}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow sx={{ fontWeight: 'bold' }}>
                        <TableCell>{averages.visitors}</TableCell>
                        <TableCell>{averages.sessions}</TableCell>
                        <TableCell>{averages.pageViews}</TableCell>
                        <TableCell>{formatPercent(averages.bounceRate)}</TableCell>
                        <TableCell>{formatTime(averages.avgTime)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    );
}
