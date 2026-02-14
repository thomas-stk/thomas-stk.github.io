import React from 'react';
import './SimpleLogoScroll.css';

const SimpleLogoScroll = ({ logos }) => {
    return (
        <div className="simple-logo-scroll">
            <div className="logo-track">
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        title={logo.title}
                        className="logo-item"
                        loading="lazy"
                    />
                ))}
                {/* Duplicate for seamless loop */}
                {logos.map((logo, index) => (
                    <img
                        key={`dup-${index}`}
                        src={logo.src}
                        alt={logo.alt}
                        title={logo.title}
                        className="logo-item"
                        loading="lazy"
                    />
                ))}
            </div>
        </div>
    );
};

export default SimpleLogoScroll;
