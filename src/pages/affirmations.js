import React from "react";
import { graphql } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import SEO from "../components/seo";
import styled from "styled-components";
import Layout from "../components/layout";



function DailyAffirmations(props) {

  const kwot = ['I am noticed and appriciated in most positive ways. I am loved.', 'I love and approve of my self. All is well.', 'I am divine expression of life. I love and accept myself where I am right now', 'The world is safe and friendly. I am safe. I am at peace with life', 'It is with love that I totally release the past. I am free. I am love', 'I love and approve of myself and I trust the process of life. I am safe', 'I calm my thoughts and I am serene', 'I Joyously release the past I am at peace', 'I express love and joy. I am at peace', 'Letting go is easy', 'I release the past and allow time to heal every area of my life', 'I live in the present moment joyous and free', 'I breathe freely and fully. I am safe. I trust the process of life', 'It is safe for me to grow up. I now handle my own life with joy and with ease.', 'I am balanced in my creative flow', 'I now choose to support myself in loving, joyous ways']

  let totalQuotes = kwot.length
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;



  const Author = styled.p`
  position: relative;
  color: Blue;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
  padding-top: 15px;
  z-index: 1;
  margin-left:150px;
  padding-left:12px;
      
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
  display: flex;
  padding: 0 20px;
  position: relative; /* for pseudos */
  color: black;
  font-size: 1.8rem;
  font-weight: normal;
  line-height: 1.5;
  margin: 0;
  border: 2px solid #fff;
  border: solid 2px;
  border-radius:20px;
  padding: 25px;
  font-family: 'Montserrat', sans-serif; 
  // font-weight: bold;
  
  :after { 
    content:"";
    position: absolute;
    border: 2px solid black;
    border-radius: 0 54px 0 0;
    width: 60px;
    height: 60px;
    bottom: -60px;
    left: 50px;
    border-bottom: none;
    border-left: none;
    z-index: 3; 
  }
  
  :before { 
    content:"";
    position: absolute;
    width: 80px;
    border: 6px solid white;
    bottom: -3px;
    left: 50px;
    z-index: 2;
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

      <Author>Louise Hay</Author>


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
