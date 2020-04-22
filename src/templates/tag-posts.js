import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import Bio from "../components/bio";
import Line from "../components/Line";

const TagPosts = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      {/* <Bio />
      <Line /> */}
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
          font-family: "Exo";
        `}
      >
        {edges.map(({ node }) => {
          const { slug } = node.fields;
          const { title } = node.frontmatter;

          return (
            <li
              css={`
                list-style-type: none;
              `}
              key={slug}
            >
              <h3
                style={{
                  marginBottom: rhythm(1 / 32),
                }}
              >
                <Link
                  css={`
                    box-shadow: none;
                    list-style-type: none;
                    margin: 0 0 14px;
                  `}
                  to={slug}
                >
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p>{node.frontmatter.description || node.excerpt} </p>
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
