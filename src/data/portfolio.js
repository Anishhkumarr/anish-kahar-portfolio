export const site = {
  baseUrl: "https://anishkahar.dev",
  title: "Anish Kahar | Backend Developer Portfolio",
  description:
    "Portfolio of Anish Kahar, a backend-focused full-stack developer building scalable Java, Spring Boot, .NET, PostgreSQL, and React applications.",
  email: "anish.kahar01@gmail.com",
  location: "Bangalore, Karnataka, India",
  availability: [
    "Internship",
    "Full-Time Opportunities",
    "Freelance Projects",
  ],
};

export const profile = {
  name: "Anish Kahar",
  brand: "Anish Kahar",
  role: "Backend Developer",
  heroImage: "/assets/undraw_Code_thinking_re_gka2.svg",
  avatar: "/assets/Anish.png",
  resumeUrl:
    "https://drive.google.com/file/d/1sZZZWL_pRKlbhn0GhR8YiW1u3x-eLgF9/view?usp=sharing",
  heroSubtitle:
    "Backend Developer | Java | Spring Boot | .NET | PostgreSQL",
  heroDescription:
    "I build scalable backend applications, REST APIs, and full-stack web solutions focused on clean architecture, performance, and real-world problem solving.",
  about: [
    "Hello! I'm Anish Kahar, an MCA student and backend-focused full-stack developer with hands-on experience building enterprise web applications.",
    "My core technologies include Java, Spring Boot, .NET Web API, REST APIs, Angular, React, PostgreSQL, SQL Server, and JPA/Hibernate.",
    "During my internship at CSIR-NAL, I have worked on enterprise applications involving the IWSHM 2026 website and Admin Dashboard, as well as an Aircraft Stores Management System.",
    "I have developed features such as participant search and filtering, data export, REST API integration, Part Details management, and Receiving Report workflows for Raw Materials, Standard Parts, and LRU categories.",
    "I also have experience developing RBAC systems, designing database-driven applications, debugging APIs, and building full-stack projects. I enjoy solving practical engineering problems and writing clean, maintainable code.",
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Anishhkumarr",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anish-kumar-gaurd-480372244/",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: `mailto:${site.email}`,
      icon: "email",
    },
  ],
};

export const experience = [
  {
    role: "Software Developer Intern",
    company: "CSIR–National Aerospace Laboratories (CSIR-NAL)",
    duration: "July 2026 - Present",
    responsibilities: [
      "Developed and enhanced the IWSHM 2026 website and Admin Dashboard using Angular.",
      "Implemented participant search, status filtering, participant details, data export, and logout functionality.",
      "Integrated Angular frontend components with Spring Boot REST APIs for dynamic data operations.",
      "Developed modules for Part Details and Receiving Report management in the Aircraft Stores Management System.",
      "Implemented Receiving Report workflows for Raw Materials, Standard Parts, and LRU categories.",
      "Integrated saved Part Details with Receiving Reports to reduce duplicate data entry.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "INDXO AI",
    duration: "February 2026 - July 2026",
    responsibilities: [
      "Developed backend APIs using .NET for web applications.",
      "Implemented Role-Based Access Control (RBAC) for managing user roles and permissions.",
      "Integrated database operations and resolved backend and API issues.",
      "Tested and debugged REST APIs using Postman.",
      "Collaborated with the frontend team to integrate backend APIs.",
    ],
  },
];

export const skillGroups = [
  {
    name: "Backend",
    items: [
      { name: "Java", image: "/assets/java.png" },
      { name: "Spring Boot", badge: "SB" },
      { name: ".NET", image: "/assets/.NET.png" },
      { name: "PHP", image: "/assets/php.png" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", image: "/assets/reactt.png" },
      { name: "HTML", image: "/assets/Html.png" },
      { name: "CSS", image: "/assets/css.png" },
      { name: "JavaScript", image: "/assets/js.png" },
      { name: "TypeScript", image: "/assets/TypeScript.png" },
      { name: "Bootstrap", image: "/assets/BootStrap.png" },
    ],
  },
  {
    name: "Database",
    items: [
      { name: "PostgreSQL", badge: "PG" },
      { name: "SQL Server", badge: "SQL" },
      { name: "MySQL", badge: "MY" },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", image: "/assets/git.png" },
      { name: "GitHub", badge: "GH" },
      { name: "VS Code", badge: "VS" },
      { name: "Visual Studio", badge: "IDE" },
      { name: "Postman", badge: "API" },
    ],
  },
];

export const statistics = [
  { label: "Projects", value: 8, suffix: "+" },
  { label: "Technologies", value: 12, suffix: "+" },
  { label: "Internship", value: 1 },
  { label: "Education", valueText: "MCA" },
];

export const featuredProject = {
  title: "Machine Inspection System",
  date: "2026",
  description:
    "An industrial inspection automation system that extracts measurement tables from PDFs, detects new characteristics, dynamically updates SQL Server tables, and stores inspection reports without hardcoded mappings.",
  stack: ["Python", "OpenCV", "EasyOCR", "SQL Server"],
  liveUrl: "",
  sourceUrl: "",
  previewLabel: "Inspection Workflow Preview",
};

export const projects = [
  {
    title: "IWSHM 2026 Website & Admin Dashboard",
    date: "2026",
    description:
      "Developed and enhanced the IWSHM 2026 website and admin dashboard for managing participant information, including search, status filtering, participant details, data export, and logout functionality.",
    stack: ["Angular", "Spring Boot", "REST APIs"],
    liveUrl: "",
    sourceUrl: "",
    previewLabel: "IWSHM Admin Dashboard",
  },
  {
    title: "Aircraft Stores Management System",
    date: "2026",
    description:
      "Enterprise inventory management system for handling Part Details and Receiving Reports with workflows for Raw Materials, Standard Parts, and LRU categories.",
    stack: ["Angular", "Spring Boot", "JPA/Hibernate", "SQL"],
    liveUrl: "",
    sourceUrl: "",
    previewLabel: "Aircraft Stores Management",
  },
  {
    title: "Machine Inspection System",
    date: "2026",
    description:
      "Industrial inspection automation platform that processes PDF reports, detects new characteristics, and updates SQL Server records dynamically.",
    stack: ["Python", "OpenCV", "EasyOCR", "SQL Server"],
    liveUrl: "",
    sourceUrl: "",
    previewLabel: "Machine Inspection",
  },
  {
    title: "RBAC Admin Panel",
    date: "Mar 2026",
    description:
      "Full-stack role-based admin panel with dynamic permissions, secure access control, and database-driven navigation.",
    stack: ["React", ".NET Web API", "PostgreSQL"],
    liveUrl: "",
    sourceUrl: "",
    previewLabel: "RBAC Dashboard",
  },
  {
    title: "Expense Tracker System",
    date: "Apr 2026",
    description:
      "Expense management application with budgeting, reporting, and analytics features for real-time personal finance visibility.",
    stack: ["Spring Boot", "PostgreSQL", "REST APIs"],
    liveUrl: "https://expense-tracker-system-silk.vercel.app/",
    sourceUrl: "https://github.com/Anishhkumarr/expense-tracker-system",
    previewLabel: "Expense Tracker",
  },
  {
    title: "Online Food Ordering System",
    date: "Nov 2023",
    description:
      "Food ordering platform with menu browsing, order placement, and PHP/MySQL backend support.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: "",
    sourceUrl: "https://github.com/Anishhkumarr/OnlineFoodOrder",
    previewLabel: "Food Ordering",
  },
  {
    title: "Travel Landing Page",
    date: "Feb 2025",
    description:
      "Responsive travel landing page with a modern visual hierarchy, strong CTAs, and polished destination storytelling.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://travel-landing-page-ak.netlify.app/",
    sourceUrl: "https://github.com/Anishhkumarr/Landing_page",
    previewLabel: "Travel Landing",
  },
  {
    title: "Rock Paper Scissors",
    date: "Jul 2024",
    description:
      "Browser-based game with real-time scoring, interactive feedback, and simple but polished game logic.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://anishhkumarr.github.io/Game/",
    sourceUrl: "https://github.com/Anishhkumarr/Game",
    previewLabel: "RPS Game",
  },
  {
    title: "Analog Clock",
    date: "Sep 2023",
    description:
      "Animated analog clock interface with synchronized hour, minute, and second hands and a clean UI.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://anishhkumarr.github.io/AnalogClock/",
    sourceUrl: "https://github.com/Anishhkumarr/AnalogClock",
    previewLabel: "Analog Clock",
  },
  {
    title: "Animated Login UI",
    date: "Sep 2023",
    description:
      "Interactive login interface with responsive layout, custom motion, and playful front-end polish.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://panda-loginpage.netlify.app/",
    sourceUrl: "https://github.com/Anishhkumarr/PandaLogin.github.io",
    previewLabel: "Login UI",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    school: "The Oxford College of Science",
    duration: "2024 - 2026",
  },
  {
    degree: "Bachelor of Science (Computer Science)",
    school: "",
    duration: "2022",
  },
];

export const certifications = [
  {
    title: "Java Full Stack Developer",
    issuer: "JSpiders",
    year: "2023",
  },
];
