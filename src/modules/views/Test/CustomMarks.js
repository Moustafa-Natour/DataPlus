// CustomMarks.js
import React from 'react';

const CustomMarks = ({ customLabels, valueTexts, marks }) => {
    return (
        <g>
            {marks.map((mark, index) => (
                <g key={index} transform={`translate(${mark.x}, ${mark.y})`}>
                    <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ fontSize: '12px', fill: '#333' }}
                    >
                        {valueTexts[index]}
                    </text>
                </g>
            ))}
        </g>
    );
};

export default CustomMarks;
