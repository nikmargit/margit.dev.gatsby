module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-favicon",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-images`],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155134388-1",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Nikola Margit's blog`,
    author: `Nikola Margit`,
    description: `Articles and tutorials from Nikola Margit, a frontend developer.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/nikolamargit`,
      },
      {
        name: `github`,
        url: `https://github.com/nikmargit`,
      },
    ],
  },
}
