import React from 'react';
import abcLogo from './abclogo.svg';
import hrcLogo from './hrclogo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="abc-logo" src={abcLogo} alt="ABC Product Logo" />
            </div>
            <div className="logo-container hrc-logo-container">
                <img className="hrc-logo" src={hrcLogo} alt="Highradius Logo" />
            </div>
        </div>
    );
};

export default Header;

