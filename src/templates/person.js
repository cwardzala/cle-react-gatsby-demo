import React from 'react'
import Layout from '../components/layout';

import './person.css';

const Person = ({data}) => {
    const {person} = data;
    return (
        <Layout>
            <div class="page-person">
                <h1>{person.name}</h1>
                <p>{person.company}</p>
                <div className="person-wrapper">
                    <img src={person.image.publicURL} alt="" class="avatar" />
                    <div class="info">


                        <ul>
                            <li>{person.email}</li>
                            <li>{person.phone}</li>
                            <li>{person.address}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Person;

export const query = graphql`
    query PersonQuery($email: String!) {
        person: staffJson(
            email: {eq: $email}
        ) {
            name
            email
            address
            phone
            company
            image {
                publicURL
            }
        }
    }
`
