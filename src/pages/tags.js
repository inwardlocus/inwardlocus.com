import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Tags from "../components/Tags";

const TagsPage = ({
  data: {
    allMarkdownRemark: { tags },
    site: {
      siteMetadata: { title },
    },
  },
  ...props
}) => (
  <Layout title={`Tags | ${title}`}>
    <Helmet />
    <Tags tags={tags} />
  </Layout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
