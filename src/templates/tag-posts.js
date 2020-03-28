import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const TagPosts = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Layout title={tagHeader}>
      <ul
        css={`
          margin: 1rem 0;
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
      <div
        css={`
          text-align: center;
        `}
      >
        <Link
          css={`
            background: blue;
            line-height: 1.5;
            padding: 5px 10px;
            margin: 5px;
            font-weight: bold;
            color: white;
            box-shadow: none;
            font-family: "Georgia";

            :hover {
              color: white;
            }
          `}
          to="/tags"
        >
          All tags
        </Link>
      </div>
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
