import { SITE } from "@/lib/site";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/logo-lg.png`,
    sameAs: [
      `https://twitter.com/${SITE.twitter.replace("@", "")}`,
      "https://discord.gg/gta6vault",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Editorial",
      email: SITE.email,
    },
    publishingPrinciples: {
      "@type": "WebPage",
      description:
        "VERIFIED: sourced and corroborated. RUMOR: credible but unconfirmed. DEBUNKED: proven false.",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "News",
        item: `${SITE.url}/news`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
