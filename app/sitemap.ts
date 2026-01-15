import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nibofix.com";

  return [
    // Home
    { url: `${baseUrl}/bg`, lastModified: new Date() },
    { url: `${baseUrl}/en`, lastModified: new Date() },
    { url: `${baseUrl}/ua`, lastModified: new Date() },

    // FAQ
    { url: `${baseUrl}/bg/faq`, lastModified: new Date() },
    { url: `${baseUrl}/en/faq`, lastModified: new Date() },
    { url: `${baseUrl}/ua/faq`, lastModified: new Date() },

    // Legal
    { url: `${baseUrl}/bg/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/en/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/ua/privacy-policy`, lastModified: new Date() },

    { url: `${baseUrl}/bg/terms-of-service`, lastModified: new Date() },
    { url: `${baseUrl}/en/terms-of-service`, lastModified: new Date() },
    { url: `${baseUrl}/ua/terms-of-service`, lastModified: new Date() },

  ];
}
