import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Books(props) {
  return (
    <Layout location={props.location} title="Books">
      <SEO title="Books"></SEO>
      <ul>
        <li>My Book 1</li>
        <li>My Book 2</li>
      </ul>
    </Layout>
  );
}

export default Books;
