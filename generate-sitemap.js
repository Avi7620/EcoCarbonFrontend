
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const siteUrl = 'https://ecocarbon.onrender.com';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.7 },
  { url: '/services#carbon-offsetting', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.6 },
    { url: '/projects', changefreq: 'weekly', priority: 0.6 },
];

const stream = new SitemapStream({ hostname: siteUrl });
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(stream).then(() =>
  console.log('✅ Sitemap created successfully!')
);

stream.pipe(writeStream);
links.forEach((link) => stream.write(link));
stream.end();
