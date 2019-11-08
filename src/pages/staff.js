import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby';

const Staff = ({data}) => {
    const {allStaffJson} = data;


    return (
        <Layout>
            <h1>Awesome Pizza Makers!</h1>

            {allStaffJson.nodes.map(person => (
                <div><Link to={`staff/${person.email}`}>{person.name} - {person.email}</Link></div>
            ))}
        </Layout>
    );
}

export default Staff;

export const query = graphql`{
    allStaffJson {
        nodes {
            email
            name
        }
    }
}`






