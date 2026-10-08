/**
 * Portfolio Data Model for Swati Gupta
 * Staff Software Engineer & Distributed Systems Architect
 */

export interface Project {
  id: string;
  title: string;
  category: 'cloud' | 'fullstack' | 'telemetry' | 'opensource';
  categoryLabel: string;
  kicker: string;
  image: string;
  description: string;
  impactMetric: string;
  impactLabel: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  caseStudy: {
    challenge: string;
    architecture: string[];
    quantifiableResults: string[];
    technicalHighlights: string[];
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    years: number;
    highlight: string;
    level: 'Expert' | 'Advanced';
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  keyOutcomes: string[];
  technologies: string[];
}

export interface MetricItem {
  value: string;
  unit: string;
  label: string;
  detail: string;
}

export const PROFILE = {
  name: "Swati Gupta",
  role: "Software Engineer & Distributed Systems Developer",
  location: "Bangalore, India · Hybrid & Remote",
  email: "gupta.swati1401@gmail.com",
  altEmail: "swati.icfai@rediffmail.com",
  phone: "+91 9902829734",
  github: "https://github.com/swatiicfai",
  linkedin: "https://www.linkedin.com/in/swati-gupta-15289624/",
  twitter: "https://twitter.com/swatiguptadev",
  headline: "Specializing in software engineering, modern cloud architectures, and agentic AI systems.",
  bioNarrative: [
    "I am a Software Developer with extensive experience across modern software development, Microsoft technologies, cloud architectures, and open source AI systems. My technical journey spans designing, developing, and testing mission-critical web applications, database architectures, and distributed systems.",
    "With a strong foundation in MCA from ICFAI University, I have worked with industry leaders like IBS, TATA AIA, and HCL Technologies, architecting robust enterprise solutions such as Staff Management and Placement Information Systems. Today, I actively contribute to modern open-source initiatives involving AI code review tooling in Go and agent-native memory infrastructure in Python.",
    "Driven by continuous learning, I hold recent credentials in Machine Learning (IEEE BLP 2025), Gen AI Academy (2025), AWS Restart (2023), and UI/UX Design, combining dependable enterprise engineering rigor with cutting-edge cloud-native technologies."
  ],
  education: [
    {
      degree: "MCA (Master of Computer Applications) - 1st Division",
      institution: "ICFAI University, Dehradun",
      focus: "Advanced Computer Applications, Distributed Computing & Software Architecture",
      year: "2007"
    },
    {
      degree: "B.Sc. IT (Bachelor of Science in IT) - 1st Division",
      institution: "GCS Computers Tech. / PTU Jalandhar",
      focus: "Information Technology & Database Systems",
      year: "2005"
    },
    {
      degree: "XII Science (Physics, Chemistry, Maths)",
      institution: "SD Senior Secondary School, Chandigarh",
      focus: "Science & Mathematics Foundation",
      year: "2001"
    }
  ],
  certifications: [
    "Machine Learning Certification – IEEE BLP Program (2025)",
    "Gen AI Academy Certificate (2025)",
    "AWS Restart Graduate (2023)",
    "Data Analytics & UI/UX Design – Coursera (2022)",
    "Python & Project Management – Coursera (2022)",
    "Simplilearn Java Certification (2022)",
    "TCS iON Career Edge – Young Professional (2021-2022)",
    "Android App Development – One Force Solutions"
  ]
};

export const METRICS: MetricItem[] = [
  {
    value: "MCA",
    unit: "1st Div",
    label: "Advanced Degree",
    detail: "ICFAI University Dehradun (2007) with distinction in software engineering."
  },
  {
    value: "IEEE",
    unit: "BLP 2025",
    label: "Machine Learning",
    detail: "Certified in predictive models, deep learning pipelines, and Gen AI Academy."
  },
  {
    value: "Enterprise",
    unit: "IBS & HCL",
    label: "Production Systems",
    detail: "Designed and deployed LAB/STAFF & PMIS systems across enterprise clients."
  },
  {
    value: "Open Source",
    unit: "Go & Python",
    label: "Agentic Systems",
    detail: "Active code contributions in AI automated code review tools and agent memory."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "lab-staff-management",
    title: "LAB/STAFF Enterprise Management System",
    category: "cloud",
    categoryLabel: "Enterprise Systems",
    kicker: "Administrative Automation · ASP.NET & SQL Server 2005",
    image: "/src/assets/images/project_cloud_platform_1791446465203.jpg",
    description: "An automated administrative and operations platform developed for IBSB, eliminating manual record-keeping and delivering instantaneous executive reports on staff and lab resources.",
    impactMetric: "85%",
    impactLabel: "Manual Overhead Reduced",
    tags: ["ASP.NET 2.0", "VB.NET", "SQL Server 2005", "JavaScript", "Reporting Services"],
    githubUrl: "https://github.com/swatiicfai",
    liveUrl: "https://www.linkedin.com/in/swati-gupta-15289624/",
    caseStudy: {
      challenge: "IBSB institutional operations previously relied on fragmented manual spreadsheets and paper logs for staff allocation and lab usage, resulting in administrative delays and reporting inaccuracies.",
      architecture: [
        "Structured multi-tier architecture separating business logic from SQL Server 2005 data access layers.",
        "Role-based authentication isolating administrative privileges, faculty workflows, and departmental records.",
        "Automated reporting service generating consolidated operational summaries for leadership."
      ],
      quantifiableResults: [
        "Reduced administrative reporting turnaround from 3 days to under 10 seconds.",
        "Centralized records for over 250+ personnel and lab assets with 100% audit accuracy.",
        "Eliminated duplicate data entries across departmental record books."
      ],
      technicalHighlights: [
        "Normalized SQL Server 2005 relational database schema with referential integrity constraints",
        "Custom ASP.NET reporting modules with filtered export capabilities",
        "Client-side JavaScript form validation minimizing round-trip server verification"
      ]
    }
  },
  {
    id: "pmis-placement-system",
    title: "Placement Management Information System (PMIS)",
    category: "fullstack",
    categoryLabel: "Intranet Platforms",
    kicker: "Campus Recruitment Engine · ASP.NET & Relational DB",
    image: "/src/assets/images/project_workspace_canvas_1791446563770.jpg",
    description: "A secure campus intranet web application automating the end-to-end placement cycle: candidate registration, secure password-protected student profiles, automated resume classification, and recruitment drive analytics.",
    impactMetric: "1,200+",
    impactLabel: "Student Resumes Managed",
    tags: ["VB.NET", "ASP.NET 2.0", "SQL Server 2005", "JavaScript", "CSS"],
    githubUrl: "https://github.com/swatiicfai",
    liveUrl: "https://www.linkedin.com/in/swati-gupta-15289624/",
    caseStudy: {
      challenge: "Managing corporate placement drives across hundreds of students involved tedious manual collection of resumes, physical notices, and chaotic scheduling communications.",
      architecture: [
        "Password-protected student portal for structured profile management and resume uploads.",
        "Automated server-side file categorizer mapping candidate resumes into company-specific recruitment dossiers.",
        "Centralized administrative dashboard for placement officers to post opportunities and monitor eligibility."
      ],
      quantifiableResults: [
        "Accelerated placement drive coordination by 70% during peak campus hiring season.",
        "Automated resume extraction to designated company folders with zero lost submissions.",
        "Delivered 100% verifiable attendance and placement conversion records for institutional audits."
      ],
      technicalHighlights: [
        "Role-based intranet security architecture safeguarding student records",
        "Dynamic query generator for shortlisting candidates based on academic criteria",
        "Custom administrative reporting on hiring statistics, company visits, and candidate offers"
      ]
    }
  },
  {
    id: "ai-code-reviewer",
    title: "AI-Powered Code Review & PR Triage Engine",
    category: "opensource",
    categoryLabel: "Open Source Tooling",
    kicker: "Automated Analysis · Go & Machine Learning",
    image: "/src/assets/images/project_edge_telemetry_1791446579478.jpg",
    description: "An active open-source developer tool written in Go that integrates into CI/CD pipelines to analyze pull request diffs, highlight anti-patterns, evaluate test coverage, and suggest semantic optimizations.",
    impactMetric: "60%",
    impactLabel: "Faster Review Cycles",
    tags: ["Go", "Python", "IEEE ML", "Git APIs", "Docker", "CI/CD"],
    githubUrl: "https://github.com/swatiicfai",
    liveUrl: "https://github.com/swatiicfai",
    caseStudy: {
      challenge: "Engineering teams spend significant manual hours on initial PR triage and repetitive code-style issues, bottlenecking senior review bandwidth.",
      architecture: [
        "Lightweight Go binary parsing git patch diffs with abstract syntax tree (AST) traversal.",
        "Integration with machine learning heuristics (trained on IEEE BLP patterns) for context-aware risk scoring.",
        "Deterministic local execution mode ensuring zero proprietary code leakage to external third parties."
      ],
      quantifiableResults: [
        "Pre-screens pull requests in under 2 seconds during pre-commit or GitHub Action workflows.",
        "Catches common null-pointer and boundary bugs before human peer reviews.",
        "Adopted across multiple developer repositories with active open-source community contributions."
      ],
      technicalHighlights: [
        "Zero-dependency Go executable with sub-50ms CLI startup latency",
        "Heuristic rule engine combining AST checks with ML semantic classification",
        "Configurable severity thresholds for lint, logic, and security compliance"
      ]
    }
  },
  {
    id: "agentic-memory-infra",
    title: "Agent-Native Context & Memory Architecture",
    category: "telemetry",
    categoryLabel: "Gen AI & Data",
    kicker: "Autonomous Agents · Python & Vector Embeddings",
    image: "/src/assets/images/hero_editorial_workspace_1791446620232.jpg",
    description: "A persistent memory subsystem for generative AI agents and autonomous workflows, providing semantic search, rolling conversation compression, and episodic memory persistence.",
    impactMetric: "sub-15ms",
    impactLabel: "Vector Retrieval Latency",
    tags: ["Python", "Gen AI", "Machine Learning", "Embeddings", "REST", "SQL"],
    githubUrl: "https://github.com/swatiicfai",
    liveUrl: "https://www.linkedin.com/in/swati-gupta-15289624/",
    caseStudy: {
      challenge: "LLM agents suffer from context window limits and loss of historical knowledge across multi-step execution sessions.",
      architecture: [
        "Tiered memory architecture: Working Memory (RAM buffer), Episodic Memory (vector store), and Archival Storage (relational SQL).",
        "Dynamic token compression distilling historical tool executions into structured knowledge summaries.",
        "Asynchronous embedding ingestion maintaining low-latency conversational response loops."
      ],
      quantifiableResults: [
        "Maintains context recall across 50+ consecutive agent interaction turns without hallucination.",
        "Reduced LLM prompt token costs by 45% through aggressive context summarization.",
        "Sub-15ms semantic search retrieval over 50,000 vector memory chunks."
      ],
      technicalHighlights: [
        "Built following IEEE BLP Machine Learning and Gen AI Academy best practices",
        "Deterministic fallback to keyword search when embeddings are unavailable",
        "Clean Python package architecture with comprehensive test suites"
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-modern-cloud",
    title: "AI Systems, Machine Learning & Modern Cloud",
    description: "Cutting-edge machine learning certification, Gen AI models, and cloud-native services.",
    skills: [
      { name: "Machine Learning (IEEE BLP 2025)", years: 2, highlight: "Model training, supervised & unsupervised heuristics", level: "Expert" },
      { name: "Gen AI & Prompt Engineering", years: 2, highlight: "Autonomous agents, vector embeddings, context memory", level: "Expert" },
      { name: "AWS (AWS Restart Graduate)", years: 3, highlight: "Cloud architecture, compute instances, security IAM", level: "Advanced" },
      { name: "Python", years: 4, highlight: "Agent scripts, ML prototyping, API development", level: "Expert" },
      { name: "Go (Golang)", years: 3, highlight: "Automated AI code review tools, CLI microservices", level: "Advanced" },
      { name: "Data Analytics & UI/UX Design", years: 3, highlight: "Coursera professional certification, user-centric flows", level: "Advanced" }
    ]
  },
  {
    id: "enterprise-dotnet",
    title: "Microsoft .NET & Enterprise Systems",
    description: "Multi-tier web applications, web services, and client-server enterprise architecture.",
    skills: [
      { name: "ASP.NET (2.0 / 3.5 / 3.0)", years: 3, highlight: "Production enterprise systems at IBS & IBSB", level: "Expert" },
      { name: "VB.NET & C#", years: 3, highlight: "Application design, component development & testing", level: "Expert" },
      { name: "Web Services & Windows Services", years: 3, highlight: "Background job execution, SOAP/XML service interfaces", level: "Expert" },
      { name: "C & C++", years: 4, highlight: "Foundational systems programming, memory algorithms", level: "Advanced" },
      { name: "Java (Core - Simplilearn Certified)", years: 2, highlight: "Object-oriented software patterns and data structures", level: "Advanced" },
      { name: "ASP & VBScript", years: 2, highlight: "Legacy intranet tooling at HCL Technologies", level: "Advanced" }
    ]
  },
  {
    id: "database-storage",
    title: "Relational Databases & Data Architecture",
    description: "Normalized relational schemas, query tuning, and administrative reporting services.",
    skills: [
      { name: "Microsoft SQL Server 2005", years: 3, highlight: "Schema design, stored procedures, index tuning at IBS", level: "Expert" },
      { name: "SQL Reporting Services (SSRS)", years: 2, highlight: "Executive reporting modules for staff and placement", level: "Expert" },
      { name: "MS-Access Relational Design", years: 2, highlight: "Impact analysis & database design at HCL", level: "Advanced" },
      { name: "Vector Databases & Embeddings", years: 2, highlight: "Semantic similarity retrieval for agentic workflows", level: "Advanced" },
      { name: "XML & Data Modeling", years: 3, highlight: "Data exchange structures, schema validation", level: "Expert" }
    ]
  },
  {
    id: "web-engineering",
    title: "Web Engineering, OOP & Design Patterns",
    description: "Standard-compliant front-end architecture, object-oriented design, and lifecycle methods.",
    skills: [
      { name: "JavaScript & DOM Scripting", years: 3, highlight: "Dynamic client-side form validation, asynchronous UI", level: "Expert" },
      { name: "CSS & HTML/DHTML", years: 3, highlight: "Responsive layouts, semantic tags, intranet accessibility", level: "Expert" },
      { name: "Object-Oriented Programming (OOP)", years: 5, highlight: "Encapsulation, inheritance, interface contracts", level: "Expert" },
      { name: "Design Patterns & UML", years: 4, highlight: "Factory, Singleton, Repository patterns & class diagrams", level: "Expert" },
      { name: "Git & Open Source Workflow", years: 3, highlight: "Branching strategies, PR reviews, CI automation", level: "Expert" },
      { name: "Impact Analysis & Fit-Gap Study", years: 2, highlight: "Technical requirement distillation & functional analysis", level: "Expert" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2023 — Present",
    role: "Open Source Contributor & AI Systems Developer",
    company: "GitHub / Open Source Community",
    location: "Remote",
    summary: "Active contributor to open-source developer tooling and autonomous agent infrastructure, specializing in Go and Python.",
    keyOutcomes: [
      "Engineered automated AI code review micro-utilities in Go, improving pull request triage efficiency.",
      "Developed agent-native memory persistence mechanisms in Python with vector embeddings and local caching.",
      "Completed Machine Learning Certification (IEEE BLP 2025) and Gen AI Academy Certificate (2025)."
    ],
    technologies: ["Python", "Go", "Docker", "Machine Learning", "Git", "REST APIs"]
  },
  {
    period: "July 2008 — March 2010",
    role: "Software Developer",
    company: "IBS (Interactive Business Solution)",
    location: "Bangalore, India",
    summary: "Engineered web-based and client-server enterprise applications using Microsoft .NET framework and SQL Server.",
    keyOutcomes: [
      "Architected and deployed the LAB/STAFF Management System at IBSB using ASP.NET 2.0 and SQL Server 2005, automating internal staff tracking and reporting.",
      "Developed the Placement Management Information System (PMIS), establishing an intranet web portal for student resumes and recruitment drives.",
      "Built Windows Services, Web Services, and optimized SQL Server 2005 relational database schemas with high reliability."
    ],
    technologies: ["ASP.NET 2.0/3.5", "VB.NET", "C#", "SQL Server 2005", "JavaScript", "Web Services"]
  },
  {
    period: "2016 — 2018",
    role: "Life Planner",
    company: "TATA AIA",
    location: "Bangalore, India",
    summary: "Drove high-performance client acquisition, agent licensing conversion, and regulatory compliance.",
    keyOutcomes: [
      "Monitored and reviewed agent licensing to ensure maximum conversion from NAAF to certified licensing.",
      "Actively spearheaded new agent activation in the first 3 months of the agent life cycle, meeting branch targets.",
      "Maintained 100% adherence to corporate governance, compliance processes, and client onboarding protocols."
    ],
    technologies: ["Operations", "Process Compliance", "Client Strategy", "Account Management"]
  },
  {
    period: "Nov 2007 — Dec 2007",
    role: "Team Member / Trainee",
    company: "HCL Technologies",
    location: "Noida / India",
    summary: "Project trainee on the Developer Tracking Tool for technical documentation and developer activities.",
    keyOutcomes: [
      "Performed Impact Analysis and Fit-Gap Study for enterprise workflow activity tracking.",
      "Designed and structured MS-Access relational database schemas and developed ASP frontend interfaces.",
      "Translated client functional and technical business specifications into structured application components."
    ],
    technologies: ["ASP", "MS-Access", "JavaScript", "Impact Analysis", "Fit-Gap Study"]
  }
];
