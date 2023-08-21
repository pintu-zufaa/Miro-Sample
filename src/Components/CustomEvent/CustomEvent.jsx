/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const CustomEvent = ({ event }) => (
    <div>
        <strong>{event.title}</strong>
        <button onClick={() => console.log(`Button clicked for ${event.title}`)}>Click Me</button>
    </div>
);

export default CustomEvent;
