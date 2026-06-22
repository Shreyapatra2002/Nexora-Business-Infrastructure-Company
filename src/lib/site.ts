export const site = {
  name: "Nexora",
  tagline: "Business Infrastructure Company",
  footerLine: "Nexora — Business Infrastructure Company",
  emails: {
    founder: "manaj@nexoraglobal.in",
    hr: "hr@nexoraglobal.in",
    info: "info@nexoraglobal.in",
  },
  whatsapp: "https://wa.me/919876543210",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/verticals", label: "Our Verticals" },
  // { href: "/saas", label: "SaaS Products" },
  { href: "/industries", label: "Industries" },
  { href: "/process", label: "Process" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/engagement", label: "Engagement" },
  { href: "/blog", label: "Blog" },
  // { href: "/contact", label: "Contact" },
  // { href: "/client-login", label: "Client Login" },
  { href: "/employee-login", label: "Employee Login" },
] as const;

export const ecosystem = [
  { vertical: "Zivara", role: "Growth, PR, Structure, Governance", href: "https://zivara-sand.vercel.app/", },
  // { vertical: "Bengal Aura", role: "Digital Brand Promotion" },
  { vertical: "BeautyGlam", role: "Events & Lifestyle Promotion", href: "https://beautyglam-crm-landing-page.vercel.app/", },
  { vertical: "Yugabyte", role: "Payroll, Software, SaaS", href: "https://yugabyte-bos.vercel.app", },
  // { vertical: "Einstein Analytics", role: "KPI & Business Intelligence" },
  // { vertical: "Client Funnel", role: "Client Acquisition System" },
] as const;

export const verticalCards = [
  {
    slug: "zivara",
    title: "Zivara Growth & PR",
    short:
      "Strategy, PR, governance, and structural readiness for SMEs scaling with discipline.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    href: "https://zivara-sand.vercel.app/",
  },
  // {
  //   slug: "bengal-aura",
  //   title: "Bengal Aura",
  //   short:
  //     "Premium digital brand promotion — shoots, campaigns, and collaborations that elevate perception.",
  //   image:
  //     "https://images.unsplash.com/photo-1542038785106-86f56f840f3c?w=800&q=80",
  //   href: "/verticals/bengal-aura",
  // },
  {
    slug: "beautyglam",
    title: "BeautyGlam",
    short:
      "Events and lifestyle experiences — from ramp shows to curated nightlife and launches.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    href: "https://beautyglam-crm-landing-page.vercel.app/",
  },
  {
    slug: "yugabyte",
    title: "Yugabyte",
    short:
      "Payroll, bespoke software, and SaaS — operational backbone for modern businesses.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    href: "https://yugabyte-bos.vercel.app",
  },
] as const;

export const saasProducts = [
  {
    slug: "yugabyte-crm",
    title: "Yugabyte CRM",
    short: "Pipeline, accounts, and team workflows in one refined workspace.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    slug: "einstein-analytics",
    title: "Einstein Analytics",
    short: "KPIs, dashboards, and intelligence layers for leadership decisions.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    slug: "client-founding-funnel",
    title: "Client Founding Funnel",
    short: "Acquisition systems engineered for predictable inbound and nurture.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
  },
] as const;

export const industries = [
    { name: "Private Colleges", image: "/images/built-for-real-sectors/college.webp" },
  { name: "Jewellery Brands", image: "/images/built-for-real-sectors/Product-Jewelry-Photography-1.webp" },
  { name: "Nursing Homes", image: "/images/built-for-real-sectors/nursinghome.webp" },
  { name: "Clinics", image: "/images/built-for-real-sectors/clinics.webp" },
  { name: "Salons", image: "/images/built-for-real-sectors/beauty-salon.webp" },
  { name: "Fashion Brands", image: "/images/built-for-real-sectors/fashion.webp" },
  { name: "Restaurants & Bars", image: "/images/built-for-real-sectors/restaurant-tableside.webp" },
  { name: "Manufacturing SMEs", image: "/images/built-for-real-sectors/Manufacturing SMEs.webp" },
  { name: "Startups", image: "/images/built-for-real-sectors/startup.webp" },
  { name: "MSMEs", image: "/images/built-for-real-sectors/MSMEs.webp" },
] as const;

export const processSteps = [
  "Requirement Understanding",
  "Business Analysis",
  "Strategy & Structure",
  "System Development",
  "Implementation",
  "Monitoring",
  "Optimization",
  "Reporting",
] as const;

export const engagementModels = [
  { model: "Consulting", description: "Strategy & structure" },
  { model: "Retainer", description: "Monthly support" },
  { model: "Project", description: "One-time delivery" },
  { model: "SaaS", description: "Monthly subscription" },
  { model: "Payroll", description: "Manpower via Yugabyte" },
  { model: "Growth Partnership", description: "Revenue share" },
] as const;

export const heroImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85";
