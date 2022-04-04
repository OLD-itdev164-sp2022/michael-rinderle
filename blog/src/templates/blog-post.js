import { H1 } from '../components/Heading';
import { Image } from 'rebass';
import Layout from '../components/layout';
import React from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const { title, body, heroImage } = data.contentfulBlogPost;

  return (
    <Layout>
      <Image src={heroImage.gatsbyImageData.images.fallback.src} />
      <H1>{title}</H1>
      <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
    </Layout>
  );
}

export default BlogPost;

export const pageQuery = graphql`
query blogPostQuery($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    slug
    body {
      childMarkdownRemark {
        html
      }
    }
    heroImage {
      gatsbyImageData(width: 960)
    }
  }
}
`