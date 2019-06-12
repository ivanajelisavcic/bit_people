import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>&copy; {year} CopyrightBIT</p>
        </footer>
    )
}

export {
    Footer
}