import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nibofix.com";
  const lastModified = new Date();

  return [
    // =========================
    // HOME
    // =========================
    { url: `${baseUrl}/bg`, lastModified },
    { url: `${baseUrl}/en`, lastModified },
    { url: `${baseUrl}/ua`, lastModified },

    // =========================
    // SERVICE PAGES
    // =========================
    { url: `${baseUrl}/bg/services/painting`, lastModified },
    { url: `${baseUrl}/en/services/painting`, lastModified },
    { url: `${baseUrl}/ua/services/painting`, lastModified },

    { url: `${baseUrl}/bg/services/flooring`, lastModified },
    { url: `${baseUrl}/en/services/flooring`, lastModified },
    { url: `${baseUrl}/ua/services/flooring`, lastModified },

    { url: `${baseUrl}/bg/services/furniture`, lastModified },
    { url: `${baseUrl}/en/services/furniture`, lastModified },
    { url: `${baseUrl}/ua/services/furniture`, lastModified },

    { url: `${baseUrl}/bg/services/upholstery`, lastModified },
    { url: `${baseUrl}/en/services/upholstery`, lastModified },
    { url: `${baseUrl}/ua/services/upholstery`, lastModified },

    { url: `${baseUrl}/bg/services/windows`, lastModified },
    { url: `${baseUrl}/en/services/windows`, lastModified },
    { url: `${baseUrl}/ua/services/windows`, lastModified },

    { url: `${baseUrl}/bg/services/deepCleaning`, lastModified },
    { url: `${baseUrl}/en/services/deepCleaning`, lastModified },
    { url: `${baseUrl}/ua/services/deepCleaning`, lastModified },

    // =========================
    // FAQ
    // =========================
    { url: `${baseUrl}/bg/faq`, lastModified },
    { url: `${baseUrl}/en/faq`, lastModified },
    { url: `${baseUrl}/ua/faq`, lastModified },

    // =========================
    // LEGAL
    // =========================
    { url: `${baseUrl}/bg/privacy-policy`, lastModified },
    { url: `${baseUrl}/en/privacy-policy`, lastModified },
    { url: `${baseUrl}/ua/privacy-policy`, lastModified },

    { url: `${baseUrl}/bg/terms-of-service`, lastModified },
    { url: `${baseUrl}/en/terms-of-service`, lastModified },
    { url: `${baseUrl}/ua/terms-of-service`, lastModified },
  ];
}
