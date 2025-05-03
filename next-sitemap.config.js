/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://sbk.co.id",
	generateRobotsTxt: true, // otomatis buat robots.txt
	generateIndexSitemap: true,
	sitemapSize: 5000,
	changefreq: "monthly",
	priority: 0.7,
	trailingSlash: false,
};
