require(`dotenv`).config({path: `.env`,})

module.exports = {
  siteMetadata: {
    name: `My CV`,
    tagline: `"Contentful with Gatsby"`,
    githubLink: `https://github.com/hieunguyen239/contenfulmybog`,
  },
  pathPrefix: "/resume",
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
      },
    },
  ],
}
