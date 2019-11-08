import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import './pizza.css';

const Pizza = ({ data }) => {
    const {pizzaPics} = data;
    console.log(pizzaPics);
    return (
        <Layout>
            <h1>Pizza!</h1>
            <div className="pizza-grid">
            {pizzaPics.nodes.map(image =>
                <img src={image.childImageSharp.fixed.src} alt="Pizza"/>
            )}
            </div>
        </Layout>
    );
};

export default Pizza;

export const query = graphql`{
    pizzaPics: allFile(filter: {relativeDirectory: {eq: "pizza"}}) {
        nodes {
            childImageSharp {
                fixed(width: 300, height: 300) {
                    src
                }
            }
        }
    }
}`