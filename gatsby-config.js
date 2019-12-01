module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./content/assets/avatar.jpg",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Nikola Margit's blog`,
    author: `Nikola Margit`,
    description: `Articles and tutorials from Nikola Margit, frontend developer.`,
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
