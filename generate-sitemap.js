const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://www.topalxscoalaauto.ro' });

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/gallery', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  
];

links.forEach(link => sitemap.write(link));

sitemap.end();

streamToPromise(sitemap)
  .then(sm => {
    createWriteStream('./public/sitemap.xml').write(sm);
  })
  .catch(err => {
    console.error(err);
  });
