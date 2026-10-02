import { pageUrl, siteUrl } from "@/lib/site";

const organizationId = `${siteUrl}/#organization`;
const allyeId = `${pageUrl("/program")}#allye`;
const amandaId = `${pageUrl("/program")}#amanda`;

const organizationDescription =
  "The Bridge Identity Reset™ helps high-performing women leaders close the gap between the person the world sees and the woman quietly overwhelmed and running on empty, in 8 weeks.";

const programDescription =
  "An 8-week leadership program built by former executives, for driven women leaders ready to move from exhaustion and self-doubt to clear, confident direction.";

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Lumera Path",
      url: pageUrl("/"),
      logo: `${siteUrl}/images/bridge-lp-logo.png`,
      description: organizationDescription,
      brand: {
        "@type": "Brand",
        name: "The Bridge Identity Reset™",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: pageUrl("/"),
      name: "The Bridge Identity Reset™",
      publisher: { "@id": organizationId },
    },
  ],
};

export const programJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": allyeId,
      name: "Allye",
      jobTitle: "ICF-Certified Executive Coach",
      image: `${siteUrl}/images/allye-new.jpg`,
      description:
        "Before becoming an ICF-certified executive coach, Allye spent more than two decades as a senior executive leading large-scale transformations inside global Fortune 500 companies, building complex strategies, navigating high-stakes environments, and guiding multicultural teams through significant change.",
      worksFor: { "@id": organizationId },
      url: `${pageUrl("/program")}#coaches`,
    },
    {
      "@type": "Person",
      "@id": amandaId,
      name: "Amanda",
      jobTitle: "Executive Coach and Program Strategist",
      image: `${siteUrl}/images/amanda-new.jpeg`,
      description:
        "Amanda brings 15+ years in demanding corporate environments, directing complex programs, managing large portfolios, and overseeing teams of 180+ consultants. She knows firsthand what it means to be the person everyone relies on, while quietly carrying far more than anyone around her could see.",
      worksFor: { "@id": organizationId },
      url: `${pageUrl("/program")}#coaches`,
    },
    {
      "@type": "Course",
      "@id": `${pageUrl("/program")}#course`,
      name: "The Bridge Identity Reset™",
      description: programDescription,
      url: pageUrl("/program"),
      image: `${siteUrl}/images/og-cover.jpg`,
      timeRequired: "P8W",
      provider: { "@id": organizationId },
      instructor: [{ "@id": allyeId }, { "@id": amandaId }],
      audience: {
        "@type": "Audience",
        audienceType: "High-performing women leaders",
      },
    },
  ],
};
