module.exports = {
  siteMetadata: {
    title: `Michael-Rinderle`,
    description: `just coding. building new stuff...`,
    author: `Michael Rinderle`,
    contact: {
        name: `Michael Rinderle`,
        company: `Sof Digital`,
        address: `Waukesha, WI`
    }
  },
    plugins: [
    {
        resolve: `gatsby-source-contentful`,
        options: {
            spaceId: `43dojnui0bkg`,
            accessToken: `v_paH0SZfvRvbQWB20Ebnv2ll0j5IY0JSlB_HjAAi8o`
        }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
