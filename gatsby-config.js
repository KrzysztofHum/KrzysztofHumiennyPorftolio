/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["400"],
            },
          ],
        },
      },
    },
  ],
}
