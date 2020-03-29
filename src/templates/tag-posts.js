import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const TagPosts = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} read${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Layout title={tagHeader}>
      <ul
        css={`
          margin: 2rem 0;
        `}
      >
        {edges.map(({ node }) => {
          const { slug } = node.fields;
          const { title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default TagPosts;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
