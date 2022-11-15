module.exports = {
  siteUrl: 'https://localhost:3000',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
