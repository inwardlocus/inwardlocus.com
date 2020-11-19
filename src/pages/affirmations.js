import React from "react";
import { graphql } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import SEO from "../components/seo";
import styled from "styled-components";


const kwot = ['I am noticed and appriciated in most positive ways. I am loved.', 'I love and approve of my self. All is well.']

let totalQuotes = kwot.length

getQuote => activeQuotes = quotes[Math.floor((Math.random() * totalQuotes))]

function DailyAffirmations(props) {

  const kwot = ['I am noticed and appriciated in most positive ways. I am loved.', 'I love and approve of my self. All is well.']

  let totalQuotes = kwot.length

  // getQuote => activeQuotes = kwot[Math.floor((Math.random() * totalQuotes))]

  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  const Author = styled.p`
      color: orange;
      display: block;
      font-style: normal;
      text-align: center;
      font-weight: bold;
      font-family: 'Montserrat', sans-serif; 
      text-transform:uppercase;
      
      ::before{
        content: "~";
        padding: 5px;
        color: black;
      }
      ::after{
        content: "~";
        padding: 5px;
        color: black;
      }
      `


  const Quotation = styled.p`
  display: block;
  line-height: 1rem;
  position: relative;
  font-family: 'Montserrat', sans-serif; 
  // font-weight: bold;

  
  :before { 
    content: "";
    position: absolute;
    background-color: red;
    width: 100%;
    height: 3px;
    top : -50%;
    align: center;
  } 
   
  :after { 
    content: "";
    position: absolute;
    background-color: red;
    width: 30%;
    height: 3px;
    top : 110%;
    right: 0;
  } 
  `

  return (
    <div style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(100),
      padding: `${rhythm(5)} ${rhythm(3 / 4)}`,

    }}>
      <SEO title="Daily Affirmations" />

      <Quotation> {kwot[Math.floor((Math.random() * totalQuotes))]} </Quotation>
      <Author>Daily Affirmation</Author>




    </div>
  );
}

export default DailyAffirmations;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
