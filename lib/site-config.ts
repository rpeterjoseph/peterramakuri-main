export const siteConfig = {
  name: "Peter Ramakuri",
  descriptor: "Independent Writing on Medicine, Biology, Science and Society",
  statement:
    "This website collects independently researched literature reviews, commentaries, educational articles, essays and case reports written outside of formal academic employment. Some works are preprints or working papers shared for early feedback; none should be read as peer-reviewed journal publications unless explicitly labeled as such.",
  url: "https://peterramakuri.com",
  email: "contact@peterramakuri.com",
  orcid: "0000-0000-0000-0000",
  orcidUrl: "https://orcid.org/0000-0000-0000-0000",
  zenodoUrl: "https://zenodo.org/search?q=Peter%20Ramakuri",
  linkedinUrl: "https://www.linkedin.com/in/peterramakuri",
  githubUrl: "",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Writing", href: "/writing" },
  { label: "Literature Reviews", href: "/literature-reviews" },
  { label: "Commentaries", href: "/commentaries" },
  { label: "Case Reports", href: "/case-reports" },
  { label: "Topics", href: "/topics" },
  { label: "About", href: "/about" },
  { label: "CV", href: "/cv" },
];

export const footerNav = {
  policies: [
    { label: "Citation Policy", href: "/policies/citation" },
    { label: "Editorial Policy", href: "/policies/editorial" },
    { label: "Privacy Policy", href: "/policies/privacy" },
    { label: "Medical Disclaimer", href: "/policies/medical-disclaimer" },
  ],
};
