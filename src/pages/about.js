import React from "react";
import { Link, graphql } from "gatsby";
import Line from "../components/Line";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import Bio from "../components/bio";

function about() {
  return (
    <Layout title="Japan Vora">
      {/* <Bio /> */}
      <Line />
    </Layout>
  );
}
export default about;
