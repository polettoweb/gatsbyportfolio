import React, { Component } from 'react';
import Socials from "../partials/Socials";


class Footer extends Component {
    setCopyrightDate() {
        var year = new Date().getFullYear();
        return year;
    }
    render() {
        return (
            <footer>
                <div className="footer__copy">
                    <p>&copy; {this.setCopyrightDate()} Marco Poletto</p>
                </div>
                <Socials />
            </footer>
        );
    }
}

export default Footer;