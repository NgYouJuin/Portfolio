/**
 * Single source of truth for all portfolio content.
 * Every fact here is taken from the two resumes provided (SWE-focused draft
 * and cybersecurity-focused version). Edit this file to update the site.
 */

export const profile = {
  name: "Ng You Juin",
  headline: "Computer Science Undergraduate | Aspiring Software Engineer",
  tagline:
    "Full-stack and backend development, with a defensive cybersecurity background.",
  email: "ngyoujuin@yahoo.com",
  github: "https://github.com/NgYouJuin",
  linkedin: "https://www.linkedin.com/in/ngyoujuin/",
  resumePath: "/Ng_You_Juin_Resume.pdf",
  location: "Singapore",
  availability: "Available for internships: May 2027 – Jun 2028",
  intro:
    "I'm a Nanyang Technological University Computer Science undergraduate who builds full-stack web applications with React, Node.js, Next.js and modern databases. I've shipped features as a Software Engineer Intern at GovTech, built an LLM-powered scam-analysis backend as a DSTA BrainHack finalist, and spent my National Service in cybersecurity at the Digital Intelligence Service.",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const quickFacts = [
  { label: "Studying", value: "Bachelor of Computing in Computer Science, NTU" },
  { label: "CGPA", value: "4.01 / 5.00" },
  { label: "Worked at", value: "GovTech · DIS" },
  { label: "Recent", value: "DSTA BrainHack Finalist 2026" },
];

export const about = [
  "I'm a Computer Science undergraduate at NTU, where my coursework covers data structures and algorithms, object-oriented design and programming, software engineering, computer networks and operating systems. Before NTU, I completed a Diploma in Information Technology at Temasek Polytechnic, with modules spanning full-stack web development, microservices, software quality assurance and machine learning for developers.",
  "My software engineering experience began at GovTech, where I built frontend and backend features for a smart-facilities management web application using React, Node.js, Express and MongoDB. More recently, as part of the DSTA BrainHack Hackathon finalist team, I built backend API routes with Next.js and Supabase, JWT-based authentication, and an integration with Groq's LLM API to analyse suspected scam messages.",
  "During National Service with the Digital Intelligence Service, I worked as a Cyber Security Specialist, carrying out vulnerability assessments and supporting incident-response work. I also built a barcode-enabled asset-transfer app with Microsoft Power Apps and Power Automate to replace a paper-based process. That mix keeps me thinking about security and reliability while I build software.",
  "I'm looking for Software Engineering internships where I can work on real products, learn from experienced engineers, and keep growing across the stack. I'm also open to cybersecurity-focused roles that make use of my defensive security background.",
];

export type SkillGroup = { title: string; icon: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "PHP", "R", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: "layout",
    skills: ["React", "Next.js", "HTML5", "CSS3"],
  },
  {
    title: "Backend Development",
    icon: "server",
    skills: ["Node.js", "Express.js", "Next.js API Routes", "REST APIs", "Microservices", "JWT Authentication", "API Middleware"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MongoDB", "Supabase", "PostgreSQL", "MySQL", "SQL Server", "SQLite", "Firebase"],
  },
  {
    title: "Cloud, Deployment & Tools",
    icon: "cloud",
    skills: ["Git", "GitHub", "Vercel", "Linux", "Microsoft Power Apps", "Microsoft Power Automate"],
  },
  {
    title: "Cybersecurity & Information Security",
    icon: "shield",
    skills: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "SOC Monitoring",
      "Alert Triage",
      "Incident Response & Investigation",
      "Network & Web Security",
      "Digital Forensics",
      "Malware Analysis & Defence",
      "CTF Challenge Design",
    ],
  },
  {
    title: "Other Technical Competencies",
    icon: "sparkles",
    skills: ["LLM API Integration (Groq)", "Workflow Automation", "Agile Development", "Software Quality Assurance"],
  },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  type: string;
  summary: string;
  bullets: string[];
  tech: string[];
  relevance: string;
};

export const experiences: Experience[] = [
  {
    org: "GovTech Singapore",
    role: "Software Engineer Intern",
    period: "Apr 2021 – Jun 2022",
    type: "Software Engineering",
    summary:
      "Full-stack development on an enterprise smart-facilities management web application.",
    bullets: [
      "Developed frontend and backend features for the web application using React, Node.js, Express and MongoDB.",
      "Embedded Form.io management forms using an iframe so users could access and submit forms inside the application without being redirected to a separate domain.",
      "Investigated software defects, resolved application bottlenecks, and implemented improvements requested by the team, working in Agile development sprints.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Form.io", "Agile"],
    relevance:
      "This is where I learned to work across the stack in a team, from reading existing code and debugging defects to shipping features users asked for.",
  },
  {
    org: "Digital Intelligence Service (DIS), National Service",
    role: "Cyber Security Specialist & Logistics Administrator",
    period: "Sep 2023 – Jul 2025",
    type: "Cybersecurity",
    summary:
      "Defensive cybersecurity work, alongside building an internal tool to digitise a manual process.",
    bullets: [
      "Carried out SOC surveillance, triaging and investigating security alerts and anomalies, including network activity and endpoint logs, in support of incident-response procedures.",
      "Conducted system vulnerability assessments, identified security weaknesses, and recommended remediation measures to strengthen system security.",
      "Designed and ran CTF challenges (command-line forensics, file analysis, data encoding and classical ciphers) for 80 participants at the MINDEF Experience Programme.",
      "Built a barcode-enabled asset-transfer application with Microsoft Power Apps and Power Automate, replacing a paper-based equipment-transfer workflow.",
      "Managed inventory checks and equipment replenishment, and compared specifications and pricing to support cost-effective purchasing with vendors.",
    ],
    tech: ["Power Apps", "Power Automate", "Vulnerability Assessment", "SOC Monitoring", "Digital Forensics"],
    relevance:
      "Investigating alerts and assessing systems taught me to think about how software fails and how it gets attacked. I bring that into the code I write, from authentication to input handling.",
  },
];

export type Project = {
  name: string;
  badge: string;
  description: string;
  problem: string;
  solution: string[];
  contributions: string[];
  tech: string[];
  period: string;
  github?: string;
  demo?: string;
  accent: "cyan" | "blue" | "violet";
};

export const projects: Project[] = [
  {
    name: "Scam Analysis & Community Voting Platform",
    badge: "DSTA BrainHack Hackathon · Finalist",
    period: "May 2026 – Jun 2026",
    description:
      "A web platform where users submit suspected scams, receive an LLM-generated analysis, and community votes decide the final scam category.",
    problem:
      "Suspicious messages are hard for ordinary users to classify, and no single source decides whether something is a scam.",
    solution: [
      "Users submit message text and receive structured scam-category predictions, suspicious keywords and explanations from an LLM.",
      "Community voting determines the winning scam category, and qualifying voters earn points when voting closes.",
    ],
    contributions: [
      "Built the backend API routes with Next.js and Supabase to manage scam submissions, community votes and user data.",
      "Implemented JWT-based authentication and API middleware to verify tokens and identify authenticated users on protected routes.",
      "Integrated Groq's LLM API to analyse submitted text and return structured category predictions, keywords and explanations.",
      "Implemented the voting logic: vote validation, repeat-vote prevention, winning-category selection and point awards.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "JWT", "Groq LLM API"],
    accent: "cyan",
    // github: "https://github.com/NgYouJuin/<repo>",
    // demo: "https://...",
  },
  {
    name: "Barcode Asset-Transfer App",
    badge: "Digital Intelligence Service · Internal tool",
    period: "Sep 2023 – Jul 2025",
    description:
      "A barcode-enabled application that digitises equipment transfers and custody tracking.",
    problem:
      "Equipment transfers were handled through a paper-based workflow that relied on manual tracking.",
    solution: [
      "A barcode-enabled app that records equipment transfers digitally, backed by automated workflows.",
    ],
    contributions: [
      "Developed the application using Microsoft Power Apps and Power Automate.",
      "Replaced the manual paper process with a digital equipment-custody workflow.",
    ],
    tech: ["Power Apps", "Power Automate"],
    accent: "blue",
  },
  {
    name: "Smart-Facilities Management Web App",
    badge: "GovTech · Internship",
    period: "Apr 2021 – Jun 2022",
    description:
      "Contributed full-stack features to an enterprise web application for managing smart facilities.",
    problem:
      "Users needed to complete management forms without leaving the application for a separate domain.",
    solution: [
      "Form.io management forms embedded inside the app through an iframe, keeping users in one place.",
    ],
    contributions: [
      "Developed frontend and backend features using React, Node.js, Express and MongoDB.",
      "Integrated the Form.io forms into the application.",
      "Investigated defects and implemented improvements requested by the team.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Form.io"],
    accent: "violet",
  },
];

export const education = [
  {
    school: "Nanyang Technological University, Singapore",
    programme: "Bachelor of Computing in Computer Science",
    period: "Jul 2025 – Jul 2029 (Expected)",
    detail: "CGPA: 4.01 / 5.00",
    modules: [
      "Data Structures and Algorithms",
      "Object-Oriented Design and Programming",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
    ],
  },
  {
    school: "Singapore Institute of Technology, Singapore",
    programme: "Specialist Programme in ICT (Information Security)",
    period: "Jan 2023 – Apr 2025",
    detail: "",
    modules: [
      "Network Security",
      "Ethical Hacking",
      "Web Security",
      "Malware Analysis and Defence",
      "Security Analytics",
      "Digital Forensics",
    ],
  },
  {
    school: "Temasek Polytechnic, Singapore",
    programme: "Diploma in Information Technology",
    period: "Feb 2019 – Apr 2022",
    detail: "CGPA: 3.78 / 4.00",
    modules: [
      "Full Stack Web Development",
      "Microservices",
      "Software Quality Assurance",
      "Data Structures and Algorithms",
      "IT System Security Essentials",
      "Machine Learning for Developers",
      "Mobile App Development",
      "IoT Application Development",
    ],
  },
];

export const achievements = [
  {
    title: "DSTA BrainHack Hackathon Finalist",
    meta: "May – Jun 2026",
    text: "Reached the finals as part of a team, building the backend for an LLM-assisted scam analysis and community voting platform.",
    icon: "trophy",
  },
  {
    title: "CTF Challenge Designer, MINDEF Experience Programme",
    meta: "Digital Intelligence Service",
    text: "Designed challenges in command-line forensics, file analysis, data encoding and classical ciphers for 80 participants.",
    icon: "flag",
  },
  {
    title: "Digitised a Paper-Based Workflow",
    meta: "Digital Intelligence Service",
    text: "Built a barcode-enabled asset-transfer app with Power Apps and Power Automate to replace manual paper tracking.",
    icon: "zap",
  },
  {
    title: "Software Engineering in Agile Teams",
    meta: "GovTech · 2021 – 2022",
    text: "Delivered features, fixed defects and acted on team requests across Agile development sprints.",
    icon: "users",
  },
];
