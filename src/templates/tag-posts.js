import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TagPosts = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <h2
        css={`
          margin: 28px 0;
          font-family: "Exo";
        `}
      >
        {totalCount} read{totalCount === 1 ? "" : "s"} tagged with "{tag}"
      </h2>

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
    site {
      siteMetadata {
        title
      }
    }
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
