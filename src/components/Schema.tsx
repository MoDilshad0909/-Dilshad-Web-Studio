import Script from "next/script";

export function Schema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mo Dilshad",
    "url": "https://modilshad.com",
    "jobTitle": "Freelance Web Developer",
    "sameAs": [
      "https://github.com/MoDilshad0909",
      "https://wa.me/919569248183"
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://modilshad.com",
    "name": "Mo Dilshad | Premium Freelance Web Developer",
    "author": {
      "@type": "Person",
      "name": "Mo Dilshad"
    }
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
