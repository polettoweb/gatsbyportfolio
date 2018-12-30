import React, { Component } from 'react';
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Keywords from '../components/partials/Keywords';
import me from '../images/marco.png';

class Home extends Component {
    render() {
        return (
            <Layout>
                <div className="home__container">
                    <Helmet>
                        <meta charSet="UTF-8" />
                        <meta name="description" content="Marco Poletto Frontend Web Developer, UI Engineer, Web Designer freelance and mentor for Junion developers"/>
                        <meta name="author" content="Marco Poletto Web Developer"/>
                        <title>Marco Poletto | Web Developer | Mentor</title>
                    </Helmet>
                    <div className="home__intro">
                        <div className="tilt">
                            <img src={me} alt="Marco Poletto" />
                        </div>
                        <h1>Hi, I'm Marco, <br /><span>Frontend Developer<br />and UI Engineer</span></h1>
                    </div>
                    <Keywords />
                    <div className="home__text">
                        <p>I create websites from scratch using the latest cutting edge web technologies. Innovation, clean code and pixel perfect results characterize all my projects. With attention to details, I always deliver the best solution to the clients according to their requirements.</p>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;
