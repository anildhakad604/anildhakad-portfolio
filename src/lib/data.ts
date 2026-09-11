export const profile = {
  name: "Anil Kumar Dhakad",
  role: "Full-Stack .NET Developer",
  city: "Indore, India",
  location: "Indore, Madhya Pradesh, India",
  email: "anildhakad8717@gmail.com",
  phone: "+91 87179 48805",
  phoneHref: "+918717948805",
  github: "https://github.com/Tutorial-git-lab",
  githubHandle: "github.com/Tutorial-git-lab",
  linkedin: "https://linkedin.com/in/anil-dhakad-31974b311",
  linkedinHandle: "linkedin.com/in/anil-dhakad-31974b311",
  resumeHref: "/Anil-Dhakad-Resume.pdf",
  photo: "/anil-photo.jpg",
  tagline:
    "I build reliable, well-structured web applications on .NET — from REST APIs and database-driven features to the payment-integrated interfaces on top of them.",
  summary:
    "Full-stack .NET developer with 2+ years of hands-on experience building scalable web applications with C#, ASP.NET Core, .NET 9, Entity Framework Core, and SQL Server. Most of my recent work has centered on e-commerce: product catalogs, cart and checkout flows, order and invoice generation, and payment integration (Razorpay, PhonePe). I'm comfortable across the stack — Next.js and React on the front end, relational schema design and query optimization on the back end — and care about code that stays readable as it grows.",
} as const;

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
  featured?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    description: "Where most of my time goes — APIs, business logic, data access.",
    skills: [
      "C#",
      "ASP.NET Core 9",
      "Razor Pages",
      "MVC / Web API",
      "Entity Framework Core",
      "REST API Design",
      "Layered (N-Tier) Architecture",
      "Dependency Injection",
      "JWT Authentication",
    ],
  },
  {
    title: "Frontend",
    description: "For shipping the interface without waiting on another team.",
    skills: ["Next.js", "React.js", "Angular", "JavaScript", "TypeScript", "HTML5 & CSS", "Bootstrap 5", "Tailwind CSS"],
  },
  {
    title: "Data",
    description: "Schema design, queries, and keeping them fast under load.",
    skills: ["SQL Server", "MySQL", "Stored Procedures", "LINQ", "Query Optimization"],
  },
  {
    title: "Tooling & Deployment",
    description: "How the code gets tested, documented, and into production.",
    skills: ["Git & GitHub", "Swagger / Postman", "IIS", "Vercel"],
  },
  {
    title: "Commerce & Payments",
    description: "The part of recent projects that actually touches money — built to handle real orders, not demos.",
    skills: [
      "Razorpay Integration",
      "PhonePe Integration",
      "Order & Invoice Generation",
      "Coupons, GST & Shipping Logic",
      "OTP & Session-Based Authentication",
    ],
    featured: true,
  },
];

export type Project = {
  slug: string;
  name: string;
  period: string;
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  liveHref?: string;
  githubHref?: string;
  linkNote?: string;
  screenshot: string;
  screenshotAlt: string;
  domain: string;
};

export const projects: Project[] = [
  {
    slug: "vimaura-ecommerce",
    name: "Vimaura — E-commerce Web Application",
    period: "Personal Project",
    summary: "Full-stack online store covering the complete shopping and order-management workflow.",
    description:
      "A full-stack e-commerce web application built with ASP.NET Core 9, Razor Pages, and Entity Framework Core, supporting the complete online shopping and order-management workflow — from browsing to checkout to invoicing. The front end uses JavaScript, jQuery, and Bootstrap 5 on top of server-rendered Razor views, with SQL Server handling product, order, and customer data.",
    features: [
      "Product listing, search, filtering, sizes, and reviews",
      "Cart and wishlist management",
      "Checkout, order placement, and invoice generation",
      "PhonePe and cash-on-delivery payment integration",
      "Coupon codes, GST, and shipping cost calculation",
      "Session-based authentication",
      "Global exception handling and database error logging",
    ],
    stack: ["C#", "ASP.NET Core 9", "Razor Pages", "Entity Framework Core", "SQL Server", "jQuery", "Bootstrap 5"],
    liveHref: "https://vimauranatural.com/",
    githubHref: "https://github.com/Tutorial-git-lab",
    linkNote: "Repository available on request",
    screenshot: "/projects/vimaura.jpg",
    screenshotAlt: "Vimaura shop listing page showing product grid with millet-based hair care bottles",
    domain: "vimauranatural.com",
  },
  {
    slug: "sweetynx-platform",
    name: "SweetyNX — Full-Stack E-Commerce Platform",
    period: "Personal Project",
    summary: "E-commerce platform with an admin dashboard for products, orders, payments, and inventory.",
    description:
      "A full-stack e-commerce platform for managing products, customers, orders, payments, and inventory, built with Next.js on the front end and a Node.js/Express API backed by MySQL through Prisma. Unlike Vimaura, this one is API-driven end to end, with a dedicated admin dashboard for running the store day to day.",
    features: [
      "JWT authentication, OTP login, and role-based admin security",
      "Product search, filtering, and detailed product pages",
      "Cart, guest checkout, and Razorpay payment integration",
      "Order management and order tracking",
      "Admin dashboard for products, orders, banners, inventory, and customers",
    ],
    stack: ["Next.js 15", "TypeScript", "Node.js", "Express.js", "MySQL", "Prisma", "Razorpay"],
    liveHref: "https://sweetynx.com/",
    githubHref: "https://github.com/Tutorial-git-lab",
    linkNote: "Repository available on request",
    screenshot: "/projects/sweetynx.jpg",
    screenshotAlt: "SweetyNX homepage showing the formal collection promotional banner for girls' clothing",
    domain: "sweetynx.com",
  },
];

export type ClientProject = {
  name: string;
  url: string;
  domain: string;
  category: string;
  description: string;
  screenshot: string;
  screenshotAlt: string;
};

export const clientWork: ClientProject[] = [
  {
    name: "Dr Astro Crystals",
    url: "https://theastrocrystals.com/",
    domain: "theastrocrystals.com",
    category: "E-Commerce",
    description:
      "Online store for natural crystals, gemstone jewelry, and crystal home decor, with category browsing, wishlists, and paid consultation booking.",
    screenshot: "/projects/astrocrystals.jpg",
    screenshotAlt: "Dr Astro Crystals homepage with a crystal bowl hero image and shop-by-category section",
  },
  {
    name: "GoExotic",
    url: "https://www.goexotic.co/",
    domain: "goexotic.co",
    category: "Automotive",
    description:
      "Pre-owned luxury and exotic car dealership serving Gurugram and Kochi, with searchable inventory and buy/sell inquiry flows.",
    screenshot: "/projects/goexotic.jpg",
    screenshotAlt: "GoExotic homepage with a dark luxury car hero image and dream-car search bar",
  },
  {
    name: "Epitome Cars",
    url: "http://epitomecars.in/",
    domain: "epitomecars.in",
    category: "Automotive",
    description:
      "Pre-owned luxury vehicle dealership with filterable inventory, insurance services, and listings across Mumbai and Chandigarh.",
    screenshot: "/projects/epitomecars.jpg",
    screenshotAlt: "Epitome Cars homepage with a dark car silhouette hero and search bar",
  },
  {
    name: "Charioteer",
    url: "https://charioteer.io/",
    domain: "charioteer.io",
    category: "EdTech",
    description:
      "Training and consulting platform for blockchain, AI, and full-stack development courses, plus academic research support.",
    screenshot: "/projects/charioteer.jpg",
    screenshotAlt: "Charioteer homepage promoting online and offline technology training",
  },
  {
    name: "The Walk-In Chef",
    url: "https://thewalkinchef.com/",
    domain: "thewalkinchef.com",
    category: "Hospitality",
    description:
      "Booking platform connecting households with private chefs for at-home meal service, with tiered packages and online booking.",
    screenshot: "/projects/walkinchef.jpg",
    screenshotAlt: "The Walk-In Chef homepage with a chef cooking hero image",
  },
  {
    name: "Dehi Foundation",
    url: "https://www.dehifoundation.org/",
    domain: "dehifoundation.org",
    category: "Nonprofit",
    description:
      "Social welfare nonprofit site covering animal rescue, community aid, and education programs, with donation and volunteer flows.",
    screenshot: "/projects/dehifoundation.jpg",
    screenshotAlt: "Dehi Foundation homepage with animals and birds being fed at sunset",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Junior Full-Stack .NET Developer",
    company: "ASharp Infotech",
    location: "Delhi, India",
    period: "Mar 2026 — Present",
    points: [
      "Develop and maintain e-commerce modules using ASP.NET Core 9, C#, Razor Pages, MVC/Web API, and EF Core",
      "Build SQL Server database operations using EF Core, LINQ, CRUD operations, and entity relationships",
      "Implement global exception handling and database error logging, improving centralized application error management",
      "Collaborate with senior developers, following established coding standards",
    ],
  },
  {
    role: "Trainee → .NET Developer",
    company: "Shiwansh Solutions",
    location: "Mohali, Punjab",
    period: "Apr 2024 — Feb 2026",
    points: [
      "Developed Web APIs using ASP.NET Core and C#",
      "Built frontend applications using React.js and Next.js",
      "Worked with SQL Server, including writing and maintaining stored procedures",
      "Optimized database queries and improved application performance",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "MES Institute of Management and Career Courses, Pune University",
    period: "2021 — 2023",
    detail: "CGPA 8.0 / 10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Govt. P.G. College, Mandsaur (Vikram University, Ujjain)",
    period: "2017 — 2020",
    detail: "71%",
  },
];

export type Service = {
  title: string;
  description: string;
  points: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "ASP.NET Core API Development",
    description:
      "REST APIs built with a clear layered structure on ASP.NET Core 9 — controllers stay thin, business logic is testable, and data access is isolated behind repositories or services.",
    points: ["Web API & Razor Pages design", "JWT authentication & role-based authorization", "Swagger / Postman documentation"],
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "End-to-end applications pairing an ASP.NET Core backend with a Next.js or React front end — one person owning the whole slice of a feature.",
    points: ["Next.js / React front ends", "API integration & state handling", "Responsive UI with Tailwind or Bootstrap"],
  },
  {
    title: "Database Design & Optimization",
    description:
      "Schema design and query work in SQL Server and MySQL, including stored procedures and query passes to cut down on slow list and search views.",
    points: ["Relational schema design", "Stored procedures & LINQ", "Query optimization"],
  },
  {
    title: "Deployment & Support",
    description:
      "Getting applications running where they need to — Windows/IIS environments or Vercel for Next.js front ends — and keeping them stable with proper error logging afterward.",
    points: ["IIS deployment & configuration", "Vercel deployments for Next.js apps", "Centralized exception handling & logging"],
  },
  {
    title: "E-Commerce & Payment Integration",
    description:
      "End-to-end online store features — product catalogs, cart and checkout flows, and integrated payment gateways — built to handle real orders, coupons, and invoicing, not just a demo checkout.",
    points: ["Razorpay & PhonePe payment integration", "Order, invoice, coupon & GST logic", "OTP and session-based authentication"],
    featured: true,
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#client-work", label: "Client Work" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

export const siteConfig = {
  url: "https://anildhakad.dev",
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary,
} as const;
