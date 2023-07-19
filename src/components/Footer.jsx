import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright {currentYear} © https://github.com/ditramadia</p>
        </footer>
    );
}

export default Footer;