import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/card";

const BlogTagPostsTemplate = ({ location, data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout location={location}>
      <h1 className={"btn gap-2 text-3xl font-bold my-3"}>
        {pageContext.targetTag}
        <div className="badge bg-green-soto">{posts.length}</div>
      </h1>
      <hr className={"my-3"}/>
      {posts.map(post => (
        <Card {...post} />
      ))}
    </Layout>
  );
};

export default BlogTagPostsTemplate;

export const Head = () => <Seo title="Tag Posts" />;

export const pageQuery = graphql`
  query BlogPostByTag($targetTag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: $targetTag}}}, sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt(truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          tags
        }
      }
    }
  }
`;
