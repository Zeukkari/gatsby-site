module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "Timo Aho", // Site title.
  siteTitleAlt: "Zeukkari", // Alternative site title for SEO.
  siteLogo: "/logos/profile.png", // Logo used for SEO and manifest.
  siteUrl: "https://zeukkari.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/timo-aho", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Personal blog", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  // siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  // disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Timo Aho", // Username to display in the author segment.
  userTwitter: "zeukkari1", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Helsinki, Finland", // User location to display in the author segment.
  userAvatar: "/logos/profile.png", // User avatar to display in the author segment.
  userDescription: "I'm working on this site.", // User description to display in the author segment.

  projectLinks: [
    {
      label: "YouTube",
      url: "https://www.youtube.com/channel/UCufiF-DkJxuxBYuVk-CKIPg",
      iconClassName: "fa fa-youtube"
    },
    {
      label: "GitHub",
      url: "https://github.com/zeukkari",
      iconClassName: "fa fa-github"
    },
    {
      label: "Sketchfab",
      url: "https://sketchfab.com/zeukkari",
      iconClassName: "fa fa-external-link"
    },
    {
      label: "Itch.io",
      url: "https://zeukkari.itch.io/",
      iconClassName: "fa fa-external-link"
    }
  ],

  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/zeukkari/",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Google",
      url: "https://plus.google.com/u/0/117202307574731041692",
      iconClassName: "fa fa-google"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/zeukkari",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:zeukkari@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Timo Aho" // Copyright string for the footer of the website and RSS feed.
};
