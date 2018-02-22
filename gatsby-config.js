module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
  
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "qualitystrategiesinc.com",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        auth: {
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          wpcom_app_clientSecret: "",
          wpcom_app_clientId: "",
          wpcom_user: "",
          wpcom_pass: "",
        },
        verboseOutput: false,
        // Search and Replace Urls across WordPress content
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://source-url.com",
        //   replacementUrl: "https://replacement-url.com",
        // },
      },
    },
  ]
};
