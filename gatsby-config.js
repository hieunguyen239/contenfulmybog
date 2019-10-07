require(`dotenv`).config({path: `.env`,})

module.exports = {
  siteMetadata: {
    name: `Star Wars Movies 🎥`,
    tagline: `"Do, or do not. There is no try."`,
    githubLink: `https://github.com/hieunguyen239/contenfulmybog`,
  },
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
