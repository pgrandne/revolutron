import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://revolutron.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://revolutron.vercel.app/chapter1',
      lastModified: new Date(),
    },
    {
      url: 'https://revolutron.vercel.app/chapter2',
      lastModified: new Date(),
    },
  ];
}
