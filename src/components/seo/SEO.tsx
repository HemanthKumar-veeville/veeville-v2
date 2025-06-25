import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  keywords?: string[];
  author?: string;
  canonicalUrl?: string;
}

const defaultProps: Required<SEOProps> = {
  title: "Veeville - Global Integrated Marketing Company",
  description:
    "Veeville is a global integrated marketing company offering brand strategy, creative development, campaign planning, digital marketing, and custom technology design across multiple sectors.",
  keywords: [
    "integrated marketing",
    "brand strategy",
    "creative development",
    "digital marketing",
    "technology design",
  ],
  author: "Veeville",
  type: "website",
  image: "",
  canonicalUrl: "",
};

export const SEO: React.FC<SEOProps> = (props) => {
  const {
    title = defaultProps.title,
    description = defaultProps.description,
    image,
    type = defaultProps.type,
    keywords = defaultProps.keywords,
    author = defaultProps.author,
    canonicalUrl,
  } = props;

  // Base URL for the website
  const siteUrl = "https://veeville.com"; // Update this with your actual domain

  // Construct full URL for canonical link and og:url
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  // Construct full image URL if image is provided
  const fullImageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={fullUrl} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      {fullImageUrl && <meta property="og:image" content={fullImageUrl} />}
      <meta property="og:site_name" content="Veeville" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {fullImageUrl && <meta name="twitter:image" content={fullImageUrl} />}

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Veeville",
          description: description,
          url: siteUrl,
          logo: `${siteUrl}/logo.png`, // Update with actual logo path
          sameAs: [
            // Add your social media profiles here
            // 'https://www.linkedin.com/company/veeville',
            // 'https://twitter.com/veeville',
            // etc.
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "", // Add your contact number
            contactType: "customer service",
            areaServed: ["IN"], // Update with your service areas
            availableLanguage: ["en"],
          },
        })}
      </script>
    </Helmet>
  );
};
