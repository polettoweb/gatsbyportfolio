import React, { Component } from 'react'
import { Link } from 'gatsby'

class Navitation extends Component {
    render() {
        return (
            <nav>
                <div className="nav__container">
                    <ul>
                        <li>
                            <Link
                                to="/"
                                exact="true"
                                title="Home"
                                activeClassName="active"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/portfolio"
                                title="Portfolio"
                                activeClassName="active"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/workshop"
                                title="Workshop"
                                activeClassName="active"
                            >
                                Workshop
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/resume"
                                title="Resume"
                                activeClassName="active"
                            >
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                title="Blog"
                                activeClassName="active"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navitation
