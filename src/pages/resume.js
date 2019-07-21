import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ExpCard from '../components/partials/ExpCard'
import Skill from '../components/partials/Skill'

const expDetails = [
    {
        text:
            "I am part of a big project for migrating a massive website built into Razor MVC into a new era. As part of the team I am maintening the company's websites (Manchester Airport, London Stanted Airport and East Midlands Airport), migrating them using CI/CD into VueJS components and NuxtJS, improving performance and updating/refactoring the existent codebase. Furthermore, I am managing and mentoring junior developers with a pair programme system.",
        number: 'odd',
        title: 'UI Engineer',
        location: 'Manchester Airports Group - Manchester',
        date: 'July 2018 - Now',
    },
    {
        text:
            "I was part of a big team maintening the two company's websites (Missguided and Mennace) built with Magento, reshaping them with a more up-to-date look and feel, improving their performance, introducing Webpack bundler and React components",
        number: 'even',
        title: 'Frontend Software Engineer',
        location: 'Missguided LTD - Manchester',
        date: 'December 2017 - June 2018',
    },
    {
        text:
            'Maintenance and development of the frontend part of various websites with or without CMS. Develop, refinement and management of the automated development environment (Gulp, GIT, Webpack, browsersynch, etc), of RESTful APIs between Wordpress and other services such as OpenWeather and social networks. Specialisation in Frontend Development and UX experience.',
        number: 'odd',
        title: 'Frontend Web Developer',
        location: 'Shoot The Moon LTD - Manchester',
        date: 'April 2017 - December 2017',
    },
    {
        text:
            'Maintenance and development of e-commerce websites. My role covers all aspect of development new websites based in Magento and Wordpress. From the creation of the development environment to the release in production. I am specialized in Front end development but I work on the backend too. We use code versioning and I am coordinating in-house and external developers to merge the code into the final product.',
        number: 'even',
        title: 'Software Developer',
        location: 'Galtone LTD - London',
        date: 'June 2015 - March 2017',
    },
    {
        text:
            'The beginning of my developer career. A freelance role that allowed me to develop projects from the wireframe to the production code. Managing clients and their expectations. Work independently and with tight deadlines.',
        number: 'odd',
        title: 'Freelance Web Developer',
        location: 'Freelance - Italy/London',
        date: 'January 2014 - May 2015',
    },
]

const skillsLines = {
    professional: [
        {
            title: 'Frontend Development',
        },
        {
            title: 'Email Development',
        },
        {
            title: 'Reactive Development',
        },
        {
            title: 'Prototyping',
        },
        {
            title: 'UX/UI Design',
        },
        {
            title: 'Backend Development',
        },
        {
            title: 'Use cases',
        },
    ],
    detailed: [
        {
            title: 'Test-driven Development',
        },
        {
            title: 'HTML / CSS',
        },
        {
            title: 'Reactive Frameworks (VueJS, React)',
        },
        {
            title: 'Prototyping Tools (Proto.io, Invision)',
        },
        {
            title: 'Adobe Creative Suite',
        },
        {
            title: 'PHP and MySQL',
        },
        {
            title: 'Magento',
        },
    ],
    personal: [
        {
            title: 'Commitment ',
        },
        {
            title: 'Punctuality ',
        },
        {
            title: 'Leadership',
        },
        {
            title: 'Communication Skill',
        },
        {
            title: 'Analytical Skill',
        },
        {
            title: 'Teamwork',
        },
        {
            title: 'Self-Motivation ',
        },
    ],
}

const skillsTopics = ['professional', 'detailed', 'personal']

class Resume extends Component {
    render() {
        return (
            <Layout>
                <section className="resume__container">
                    <Helmet>
                        <meta charSet="UTF-8" />
                        <meta
                            name="description"
                            content="Marco Poletto Frontend Web Developer, Web Designer freelance, curriculum vitae. Hire me"
                        />
                        <meta
                            name="author"
                            content="Marco Poletto Web Developer"
                        />
                        <title>
                            Marco Poletto | Web Developer - Curriculum Vitae -
                            Hire me
                        </title>
                    </Helmet>
                    <section className="experience__container">
                        <h1>Experience</h1>
                        <p className="experience__intro">
                            Web development has been a passion of mine since
                            1997 that became my full-time job five years ago. I
                            really enjoy the challenge that the web brings to
                            developers and I like to keep improving and learn
                            new technologies. I choose to specialise myself into
                            front-end for being able to shape user interfaces
                            based on the client needs and for being challenged
                            by the constant amount of innovations that the
                            front-end world is giving
                        </p>
                        <ul className="experience">
                            {expDetails.map(item => (
                                <ExpCard
                                    key={item.date}
                                    number={item.number}
                                    location={item.location}
                                    title={item.title}
                                    date={item.date}
                                    text={item.text}
                                />
                            ))}
                        </ul>
                    </section>
                    <section className="skills__container">
                        <h2>Skills</h2>
                        {skillsTopics.map(topic => {
                            return (
                                <Skill key={topic} title={topic}>
                                    <div className="skill__title">
                                        {skillsLines[topic].map(item => {
                                            return (
                                                <React.Fragment key={item.title}>
                                                    <p>{item.title}</p>
                                                </React.Fragment>
                                            )
                                        })}
                                    </div>
                                </Skill>
                            )
                        })}
                    </section>
                    <div className="resume__buttons">
                        <a
                            className="button"
                            href="/marco-poletto-cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </a>
                        <a
                            className="button"
                            href="mailto:marco@marcopoletto.eu"
                        >
                            Contact Me
                        </a>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default Resume
