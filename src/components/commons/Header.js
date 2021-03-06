import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'gatsby'

import Navigation from './Navitation'
import MenuItem from './MenuItem'
import logo from '../../images/logo.svg'

class Header extends Component {
    render() {
        return (
            <div className="header__container">
                <div className="logo">
                    <Link to="/" title="Back to the Homepage">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <MediaQuery query="(min-width: 1024px)">
                    <Navigation />
                </MediaQuery>
                <MediaQuery query="(max-width: 1023px)">
                    <MenuItem>
                        <Navigation />
                    </MenuItem>
                </MediaQuery>
            </div>
        )
    }
}

export default Header
