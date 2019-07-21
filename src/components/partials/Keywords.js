import React from 'react';
import { Spring } from 'react-spring';

const keywords = [
    {
        name: 'JavaScript',
        opacity: '1'
    },
    {
        name: 'React',
        opacity: '0.7'
    },
    {
        name: 'Vue',
        opacity: '0.7'
    },
    {
        name: 'Accessibility',
        opacity: '0.6'
    },
    {
        name: 'SSR',
        opacity: '0.4'
    },
    {
        name: 'GraphQL',
        opacity: '0.3'
    },
    {
        name: 'Sass',
        opacity: '0.5'
    }
];


const Keywords  = () => (
            <div className="keywords__container">
                <div className="keywords__wrapper">
                    {keywords.map((item, i) => {
                        return (
                            <Spring key={i} config={{ duration: 3000, delay: i * 700 }} from={{ opacity: 0 }} to={{ opacity: item.opacity }}>
                                {props => <p id={item.name.toLowerCase()} style={props}>{item.name}</p>}
                            </Spring>
                        )
                    })}
                </div>
            </div>
        );

export default Keywords;