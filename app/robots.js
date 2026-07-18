export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://rkconsultant.netlify.app/sitemap.xml",
  };
}
