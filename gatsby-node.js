/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const {createPage, createRedirect} = actions;

    let result = await graphql(`{
        allStaffJson {
            nodes {
                email
            }
        }
    }`);
    result.data.allStaffJson.nodes.forEach((node) => {
        createPage({
            path: `staff/${node.email}`,
            component: path.resolve('./src/templates/person.js'),
            context: {
                email: node.email
            }
        });
    });








};