export const profile = {
  name: "Vamsi Krishna Bendalam",
  shortName: "VK",
  title: "Partner Solutions Engineer",
  subtitle: "Technical Solutions Consultant • Data & Automation Engineer",
  tagline:
    "Engineering scalable integrations across Retail Media, Banking, Healthcare & E-Commerce.",
  email: "vamsikrishben@gmail.com",
  phone: "+91 9600140801",
  location: "Chennai, India",
  linkedin: "https://www.linkedin.com/in/vamsi-krishna-bendalam",
  github: "https://github.com/vamsikrishnabendalam",
  resumeUrl: "/Vamsi_Krishna_Bendalam_Resume.pdf",
  summary:
    "Data Engineer and Integration Specialist with 5+ years of experience across Retail Media, Banking, Healthcare, and E-Commerce domains, specializing in workflow automation, API integrations, ETL engineering, and stakeholder-driven solution delivery. Strong background in technical consulting, system design, cross-functional collaboration, and automation development.",
};

export const coreSkills: { label: string; items: string[] }[] = [
  {
    label: "Solutions & Consulting",
    items: [
      "Partner Solutions Engineering",
      "Technical Consulting",
      "Stakeholder Management",
      "Solution Engineering",
      "Technical Project Management",
    ],
  },
  {
    label: "Automation & Integration",
    items: [
      "Workflow Automation",
      "API Integrations",
      "System Design",
      "Retail Media Integrations",
      "Android Deployment",
    ],
  },
  {
    label: "Languages & Platforms",
    items: ["Python", "Java", "SQL", "REST APIs", "Shell Scripting"],
  },
  {
    label: "Cloud & Data",
    items: ["Snowflake", "AWS S3", "AWS EC2", "Hive", "Kafka", "MySQL"],
  },
  {
    label: "Tools & Ops",
    items: [
      "Make.com",
      "Ab Initio",
      "Jenkins",
      "Datadog",
      "Control-M",
      "Git",
      "Jira",
      "Postman",
    ],
  },
  {
    label: "AI Tooling",
    items: ["GitHub Copilot", "Claude", "Gen AI Workflows", "Make.com Advanced"],
  },
];

export const skillsRadar = [
  { name: "Python", level: 0.85 },
  { name: "Make.com", level: 0.95 },
  { name: "SQL", level: 0.9 },
  { name: "Snowflake", level: 0.8 },
  { name: "AWS S3", level: 0.8 },
  { name: "Ab Initio", level: 0.95 },
  { name: "REST APIs", level: 0.9 },
  { name: "Java", level: 0.7 },
  { name: "Hive", level: 0.8 },
  { name: "Jenkins", level: 0.75 },
  { name: "Control-M", level: 0.85 },
  { name: "Datadog", level: 0.7 },
  { name: "Claude", level: 0.9 },
  { name: "GitHub Copilot", level: 0.9 },
  { name: "Gen AI", level: 0.85 },
];

export type Experience = {
  company: string;
  designation: string;
  period: string;
  location: string;
  project: string;
  client: string;
  role: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Xoriant Solutions Pvt. Ltd.",
    designation: "Software Developer",
    period: "Mar 2024 — Present",
    location: "Chennai",
    project: "Connectors — SKAI",
    client: "SKAI, Israel",
    role: "Integration Engineer",
    bullets: [
      "Led cross-functional delivery of automation and API integration solutions for Walmart, Baidu, DoorDash, Chewy, and Qihoo platforms.",
      "Managed a team of 10 engineers and collaborated with stakeholders to deliver scalable workflow automation solutions.",
      "Built reusable automation modules and Gen AI–assisted workflows, improving delivery speed by 40%+.",
      "Implemented monitoring, retry logic, and troubleshooting mechanisms for high-availability automation pipelines.",
      "Automated data extraction, transformation, and dashboard ingestion pipelines.",
    ],
    stack: [
      "Make.com",
      "Snowflake",
      "AWS S3",
      "Postman",
      "Jira",
      "GitHub Copilot",
      "Claude",
      "Google Workspace",
    ],
  },
  {
    company: "Xoriant Solutions Pvt. Ltd.",
    designation: "Software Developer",
    period: "Mar 2024 — Feb 2025",
    location: "Chennai",
    project: "Common Data Acquisition",
    client: "Citibank, US",
    role: "ETL Developer",
    bullets: [
      "Designed scalable ETL pipelines and generic PSET frameworks using Ab Initio for regulatory reporting.",
      "Migrated legacy workloads to Hive-based cloud environments and optimized enterprise reporting pipelines.",
      "Collaborated with technical and business stakeholders to troubleshoot production issues and improve reporting accuracy.",
    ],
    stack: [
      "Ab Initio GDE",
      "Control Center",
      "Express IT",
      "Hive",
      "SQL Developer",
      "Tectia",
      "Jira",
    ],
  },
  {
    company: "Capgemini",
    designation: "Associate Consultant",
    period: "Jul 2023 — Dec 2023",
    location: "Chennai",
    project: "Data Migration & Integration",
    client: "Barclays Bank, UK",
    role: "ETL Developer",
    bullets: [
      "Delivered enterprise data integration solutions supporting BI reporting and machine learning pipelines.",
      "Conducted requirement analysis, code reviews, unit testing, and technical documentation.",
      "Developed scalable generic graphs and PSETs using Ab Initio and shell scripting; monitored jobs and responded to failures.",
    ],
    stack: ["Ab Initio", "Control-M", "AWS EC2", "Shell Scripting", "Jira"],
  },
  {
    company: "Accenture",
    designation: "Data Engineering Associate",
    period: "Sep 2021 — Jul 2023",
    location: "Chennai",
    project: "Legacy Data Migration & Transformation",
    client: "Blue Cross Blue Shield NC",
    role: "Data Engineer / ETL Developer",
    bullets: [
      "Developed enterprise ETL pipelines transforming healthcare data into Kafka streams and AWS systems.",
      "Executed CI/CD deployments through Jenkins and performed RCA and operational support activities.",
      "Contributed to system architecture discussions, stakeholder reporting, and data quality optimization.",
      "Monitored Control-M jobs across DEV, QA, UAT/PS, PROD regions for seamless data flow.",
    ],
    stack: [
      "Ab Initio",
      "Control-M",
      "Jenkins",
      "Snowflake",
      "MySQL",
      "WinSCP",
      "Jira",
    ],
  },
];

export type Project = {
  title: string;
  client: string;
  description: string;
  tags: string[];
  highlight: string;
};

export const projects: Project[] = [
  {
    title: "SKAI Retail Media Connectors",
    client: "SKAI, Israel",
    description:
      "Cross-platform API and workflow integrations connecting SKAI to Walmart, Baidu, DoorDash, Chewy and Qihoo. Reusable modules, Gen AI–assisted workflows and monitoring lifted delivery speed by 40%+.",
    tags: ["Make.com", "Snowflake", "AWS S3", "Gen AI", "REST APIs"],
    highlight: "40%+ delivery speed gain",
  },
  {
    title: "Common Data Acquisition Framework",
    client: "Citibank, US",
    description:
      "Generic PSET frameworks in Ab Initio for regulatory reporting. Migrated legacy workloads to Hive and optimised enterprise reporting pipelines.",
    tags: ["Ab Initio", "Hive", "SQL", "Regulatory Reporting"],
    highlight: "Legacy → Cloud migration",
  },
  {
    title: "Barclays Data Migration & Integration",
    client: "Barclays Bank, UK",
    description:
      "Enterprise data integration powering BI and ML pipelines. Generic graphs and PSETs, shell automation, and Control-M monitoring.",
    tags: ["Ab Initio", "Control-M", "AWS EC2", "Shell"],
    highlight: "BI + ML pipelines",
  },
  {
    title: "BCBS NC Healthcare ETL",
    client: "Blue Cross Blue Shield NC",
    description:
      "Enterprise ETL transforming healthcare data into Kafka and AWS systems. Jenkins CI/CD and RCA-driven operational support across DEV → PROD.",
    tags: ["Ab Initio", "Kafka", "Jenkins", "AWS", "Snowflake"],
    highlight: "Multi-region production support",
  },
];

export const awards = [
  { title: "Ace Award", org: "Accenture", year: "2023" },
  { title: "XOR Champ", org: "Xoriant", year: "2024" },
  { title: "SKAI AHM Best Performer", org: "SKAI", year: "Q3 2025" },
  { title: "SKAI Monthly Best Performer", org: "SKAI", year: "Nov 2025" },
];

export const certifications = [
  { title: "Make.com Advanced", org: "Make.com" },
  { title: "AI for Everyone", org: "Andrew Ng — Coursera" },
];

export const education = [
  {
    degree: "Bachelor of Engineering, Computer Science",
    institution: "Saveetha University, Chennai",
    year: "2021",
  },
];

export const blogPosts = [
  {
    title: "Designing Resilient Make.com Workflows for Retail Media",
    excerpt:
      "How retry logic, idempotency and modular scenarios keep partner integrations alive at scale.",
    date: "Coming soon",
    tag: "Automation",
  },
  {
    title: "From Ab Initio to Hive: A Migration Playbook",
    excerpt:
      "Patterns for migrating regulatory ETL workloads from legacy enterprise tooling to cloud-native data stacks.",
    date: "Coming soon",
    tag: "Data Engineering",
  },
  {
    title: "Gen AI in the Integration Engineer's Toolkit",
    excerpt:
      "Practical Copilot + Claude workflows that compressed our delivery cycles by 40%+.",
    date: "Coming soon",
    tag: "Gen AI",
  },
];

export const navItems = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "awards", label: "AWARDS" },
  { id: "blog", label: "JOURNAL" },
  { id: "contact", label: "CONTACT" },
];
