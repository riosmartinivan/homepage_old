/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://phorus.group",
  generateRobotsTxt: true,
  sitemapSize: 7000,
}
