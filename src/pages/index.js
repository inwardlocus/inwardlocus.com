import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Bio from "../components/bio";
import Line from "../components/Line";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

function BlogIndex(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  const Desc = styled.p`
  font-family: 'Exo 2', sans-serif;
    font-weight: bold;
    /* color: #696969; */
  `;

  return (
    <Layout title={siteTitle}>
      <SEO title="A library of inward reflections." />
      {/* <Bio /> */}
      {/* /<Line /> */}
      <div>
        <p css={`          
          font-weight: bold;
          font-size: 20px;
          color: red;
          margin: 0px;
          font-family: 'Courier Prime', monospace;

        `}>Latest Posts</p></div>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 32),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>
                {node.frontmatter.date} | {node.timeToRead}
                {" min read "}
              </small>
            </header>
            <Desc>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </Desc>
          </article>
        );
      })}
      <Link
        css={`
        font-weight: bold;
        font-size: 20px;
        color: #2c99d1;;
        margin: 0px;
        font-family: 'Courier Prime', monospace;
        box-shadow: none;

            :hover {
              color: #2c99d1;
              background: white;
              font-weight: bold;
        font-size: 20px;
        margin: 0px;
        font-family: 'Courier Prime', monospace;
        box-shadow: 0px 1px;
            }
          `}
        to="/allposts"
      >
        Read more
        </Link>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          timeToRead
        }
      }
    }
  }
`;
