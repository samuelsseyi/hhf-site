export const BRAND = {
  name: "Haven for the Hopeless Foundation",
  shortName: "HHF",
  tagline: "Empowering Lives for a Better Tomorrow",
  subBrand: "Home of Hope",
  founded: "2024",
  location: "Ikorodu, Lagos State, Nigeria",
  phone1: "+234 807 535 2163",
  phone2: "+234 805 276 8609",
  email: "havenforthehopelessfoundation@gmail.com",
  instagram: "https://www.instagram.com/havenforthehopelessfoundation",
  instagramHandle: "@havenforthehopelessfoundation",
  tiktok: "https://www.tiktok.com/@havenforthehopeless",
  tiktokHandle: "@havenforthehopeless",
};

export type NavChild = {
  label: string;
  href: string;
  flag?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "GCAMP", href: "/programs/gcamp", flag: "Flagship" },
      { label: "Women Empowerment", href: "/programs#women" },
      { label: "Drug Prevention", href: "/programs#drug" },
      { label: "Back to School", href: "/programs#school" },
      { label: "Leadership Conference", href: "/programs#conference" },
    ],
  },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Donate", href: "/donate" },
      { label: "Partner With Us", href: "/contact" },
      { label: "Volunteer", href: "/get-involved#volunteer" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const IMPACT_STATS = {
  children: 1000,
  women: 100,
  schools: 25,
  peaceAmbassadors: 40,
  learningMaterials: 600,
};

export const PARTNERS = [
  "MTN Nigeria",
  "Milo Nestlé",
  "Lagos State Neighborhood Safety Corps",
  "Ministry of Education",
  "Help for All International Foundation",
  "Atlas Initiative",
];

export const GCAMP_STATS = [
  { value: "250", label: "Girls Enrolled" },
  { value: "5", label: "Schools · Ikorodu" },
  { value: "9-Month", label: "Program Cycle" },
  { value: "36-State", label: "National Vision" },
];

export const CORE_VALUES = [
  {
    title: "Compassion",
    body: "We lead with empathy in every interaction.",
  },
  {
    title: "Teamwork",
    body: "We achieve more when we move together.",
  },
  {
    title: "Service",
    body: "We exist to serve, not to be seen.",
  },
  {
    title: "Transparency",
    body: "Every naira and every action is accountable.",
  },
  {
    title: "Humility",
    body: "We learn from the communities we serve.",
  },
  {
    title: "Responsibility",
    body: "We own our outcomes — good and bad.",
  },
  {
    title: "Excellence",
    body: "We do the work well because the work matters.",
  },
];

export const DONATION_TIERS = [
  {
    amount: "₦5,000",
    impact: "A complete learning kit for one girl",
    icon: "Backpack",
  },
  {
    amount: "₦20,000",
    impact: "One month of mentorship for 5 girls",
    icon: "BookOpen",
  },
  {
    amount: "₦50,000",
    impact: "Sponsors one girl through the full 9-month GCAMP cycle",
    icon: "User",
  },
  {
    amount: "₦100,000",
    impact: "Funds an entire school's monthly mentorship session",
    icon: "School",
  },
  {
    amount: "₦200,000",
    impact: "Partners one full school into the GCAMP program",
    icon: "Star",
  },
  {
    amount: "Custom",
    impact: "Become a Program Sponsor — let's design your impact",
    icon: "Globe",
  },
];

export const COLORS = {
  cobalt:   "#0C2447",
  ember:    "#C84B1F",
  gold:     "#D4961E",
  cream:    "#F8F4EE",
  charcoal: "#1A1A2E",
  savanna:  "#1C5C3E",
} as const;
