import { PROPERTIES } from "@/lib/data/properties";

export default async function sitemap() {
  const baseUrl = "https://rkconsultant.netlify.app";

  // Static pages
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/properties",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic pages for each property listing
  const propertyRoutes = PROPERTIES.map((property) => ({
    url: `${baseUrl}/properties/${property.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...propertyRoutes];
}
