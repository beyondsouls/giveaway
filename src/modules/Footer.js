import React from 'react';
import './Footer.css';

const year = () => new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            {year()} &copy;{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://beyond-souls.com">
                Beyond Souls
            </a>{' '}
            Records KLG
        </footer>
    );
};

export default Footer;
