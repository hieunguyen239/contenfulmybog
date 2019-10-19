import React from 'react';
import '../../static/styles/scrollIcon.scss';

const scrollIcon = () => {
    return (
        <span className="scroll-icon">
            <span className="scroll-icon__wheel-outer">
                <span className="scroll-icon__wheel-inner"></span>
            </span>
        </span>
    )
};

export default scrollIcon;