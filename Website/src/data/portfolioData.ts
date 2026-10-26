export * from './socialLinks';

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Database' | 'Computer Science' | 'Tools & Environment' | 'Web Fundamentals';
  description: string;
  tags: string[];
  level: string; // e.g. "Core Foundation", "Proficient", "Practical"
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status: 'Concept Architecture' | 'Live Project' | 'In Development';
  githubUrl: string;
  liveUrl?: string;
  badge: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  achievements: string[];
  status: 'In Progress' | 'Completed' | 'Milestone';
}

export const PERSONAL_INFO = {
  name: "Aniket Kumar",
  title: "Aspiring Systems Developer | Backend Developer | Software Engineer",
  tagline: "Building software from the fundamentals to the future.",
  subTagline: "Systems Development • Backend Engineering • Problem Solving",
  location: "Bengaluru, Karnataka, India",
  university: "REVA University",
  degree: "B.Tech in Information Science and Engineering",
  email: "aniketkumar200631@gmail.com",
  linkedin: "https://www.linkedin.com/in/aniket-kumar-dev",
  github: "https://github.com/Aniket-008",
  bio: "I am an Information Science Engineering undergraduate at REVA University, Bengaluru. I have a strong passion for understanding how computers execute code under the hood—from memory layout and CPU architecture to robust backend systems. I spend my time mastering C, C++, Data Structures & Algorithms, relational database internals, and Linux environments to build resilient, high-performance software.",
  availability: "Available for internships, hackathons & engineering collaborations",
  interests: [
    "Low-Level & Systems Programming",
    "Backend Architecture & APIs",
    "Data Structures & Algorithms",
    "Database Engineering & Query Optimization",
    "Linux Internals & Command Line Tooling",
    "AI-Powered Software Applications"
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: "C",
    category: "Programming",
    description: "Foundational understanding of procedural programming, pointers, dynamic memory allocation (malloc/free), structs, and low-level system interactions.",
    tags: ["Pointers", "Memory Management", "Structs", "Standard Library"],
    level: "Core Foundation"
  },
  {
    name: "C++",
    category: "Programming",
    description: "Object-oriented programming, standard template library (STL vectors, maps, sets), templates, reference semantics, and algorithmic efficiency.",
    tags: ["OOP", "STL Containers", "Templates", "References"],
    level: "Core Foundation"
  },
  {
    name: "Python",
    category: "Programming",
    description: "Writing clean, expressive scripts for automation, data processing, backend logic, and prototyping algorithmic concepts and AI workflows.",
    tags: ["Scripting", "Automation", "Backend Logic", "Data Manipulation"],
    level: "Practical Proficiency"
  },

  // Database
  {
    name: "SQL",
    category: "Database",
    description: "Relational database querying, multi-table joins, subqueries, aggregations, indexing concepts, and schema constraints.",
    tags: ["Complex Queries", "Joins", "Grouping", "Constraints"],
    level: "Core Knowledge"
  },
  {
    name: "MySQL",
    category: "Database",
    description: "Relational database management, table creation, normalization, primary/foreign key relationships, and data integrity enforcement.",
    tags: ["RDBMS", "Normalization", "Schema Design", "Transactions"],
    level: "Practical Knowledge"
  },

  // Computer Science
  {
    name: "Data Structures & Algorithms",
    category: "Computer Science",
    description: "Rigorous study of arrays, linked lists, stacks, queues, trees, binary search, recursion, sorting algorithms, and time/space complexity analysis (Big-O).",
    tags: ["Big-O Analysis", "Trees & Graphs", "Sorting", "Searching"],
    level: "Active Problem Solver"
  },
  {
    name: "Problem Solving",
    category: "Computer Science",
    description: "Analytical breakdown of computational challenges, edge-case identification, mathematical reasoning, and writing optimal solutions.",
    tags: ["Analytical Thinking", "Edge Cases", "Optimization", "Competitive Coding"],
    level: "Continuous Practice"
  },

  // Tools & Environment
  {
    name: "Linux & Shell",
    category: "Tools & Environment",
    description: "Command-line navigation, file permissions, process management, bash scripting fundamentals, and environment configuration.",
    tags: ["Bash", "File Hierarchy", "Permissions", "CLI Navigation"],
    level: "Daily Driver"
  },
  {
    name: "Git & Version Control",
    category: "Tools & Environment",
    description: "Distributed version control, branch management, merge conflict resolution, commit hygiene, and collaborative workflows.",
    tags: ["Branches", "Commits", "Rebase", "Merge"],
    level: "Proficient Workflow"
  },
  {
    name: "GitHub",
    category: "Tools & Environment",
    description: "Remote repository hosting, pull requests, code reviews, issue tracking, and open-source contribution practices.",
    tags: ["Pull Requests", "Code Reviews", "Issues", "Remote Repos"],
    level: "Active User"
  },

  // Web Fundamentals
  {
    name: "HTML5",
    category: "Web Fundamentals",
    description: "Semantic HTML markup, document structure, accessibility standards, and web form architecture.",
    tags: ["Semantic Elements", "Forms", "Accessibility", "DOM"],
    level: "Practical Knowledge"
  },
  {
    name: "CSS3",
    category: "Web Fundamentals",
    description: "Modern CSS layout models including Flexbox and Grid, responsive media queries, transitions, and styling fundamentals.",
    tags: ["Flexbox", "Grid", "Responsive Design", "Transitions"],
    level: "Practical Knowledge"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "service-finder",
    title: "Household Service Finder",
    tagline: "Bridging the gap between homeowners and vetted local trade professionals.",
    category: "Full-Stack System Concept",
    description: "A comprehensive service marketplace architecture designed to connect urban households with verified local electricians, plumbers, and technicians. Focuses on location-based matching, transparent service pricing, availability scheduling, and customer rating integrity.",
    highlights: [
      "Designed relational schema for multi-role user accounts (Clients, Service Providers, Admins)",
      "Engineered location-based proximity filtering concept for swift emergency repairs",
      "Drafted backend API specs for appointment booking, status updates, and verified reviews",
      "Prioritized security considerations for client contact privacy and verification checks"
    ],
    technologies: ["Python", "SQL / MySQL", "REST Architecture", "HTML / CSS", "Linux CLI"],
    status: "Concept Architecture",
    githubUrl: "https://github.com/Aniket-008/household-service-finder",
    liveUrl: "#contact",
    badge: "Architecture Concept"
  },
  {
    id: "ai-recommender",
    title: "AI-Powered Product Recommendation System",
    tagline: "Transparent multi-criteria recommendation engine balancing budget, pros & cons.",
    category: "AI & Decision Systems Concept",
    description: "An intelligent product decision-support engine that analyzes user requirements, budgetary limits, and key feature weights. Rather than presenting black-box ratings, the system articulates structured trade-offs—explicitly highlighting the advantages and disadvantages of each option to empower informed choices.",
    highlights: [
      "Formulated scoring algorithm incorporating user budget boundaries and weighted attributes",
      "Created transparent 'Pros & Cons' generation pipeline to avoid misleading algorithmic bias",
      "Modeled relational database structure for categorized product specifications and user constraints",
      "Designed scalable data ingestion pipeline concept for product catalog updates"
    ],
    technologies: ["Python", "Algorithms & Heuristics", "SQL Database", "Data Processing", "System Design"],
    status: "Concept Architecture",
    githubUrl: "https://github.com/Aniket-008/ai-product-recommender",
    liveUrl: "#contact",
    badge: "Architecture Concept"
  },
  {
    id: "portfolio-website",
    title: "Interactive 3D Developer Portfolio",
    tagline: "Cinematic, high-performance portfolio featuring 3D avatar, Three.js & glassmorphism.",
    category: "Web Engineering & Creative Tech",
    description: "The modern portfolio you are currently exploring. Built to demonstrate high visual polish inspired by high-end Wix Studio creative portfolios, featuring an interactive 3D developer avatar, Three.js particle canvas, smooth micro-interactions, responsive mobile design, and honest technical presentation.",
    highlights: [
      "Engineered Three.js interactive particle background responding smoothly to mouse vectors",
      "Integrated 3D character avatar with interactive tilt physics and holographic accents",
      "Implemented accessibility controls including reduced-motion support and high contrast",
      "Structured with modular TypeScript components and zero bloated runtime dependencies"
    ],
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "Vite"],
    status: "Live Project",
    githubUrl: "https://github.com/Aniket-008/aniket-portfolio",
    liveUrl: "#",
    badge: "Live & Interactive"
  },
  {
    id: "systems-playground",
    title: "Systems & Algorithms Lab",
    tagline: "Curated implementations of core algorithms, memory explorations & CLI tools.",
    category: "Systems & DSA Repository",
    description: "An ongoing repository of low-level experiments, custom data structure implementations in C and C++, pointer exercises, Linux shell utilities, and competitive programming solutions.",
    highlights: [
      "Custom implementations of binary search trees, linked lists, and sorting algorithms in C",
      "Memory profiling benchmarks using Valgrind and GDB debugging workflows",
      "Modular code structured with clean Makefiles and POSIX compliance testing",
      "Serves as an ongoing codebase for university hackathon preparations"
    ],
    technologies: ["C", "C++", "Linux", "GDB", "Make", "Git"],
    status: "In Development",
    githubUrl: "https://github.com/Aniket-008/systems-algorithms-lab",
    badge: "In Active Lab"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "reva-btech",
    period: "Present (Undergraduate)",
    title: "B.Tech in Information Science and Engineering",
    institution: "REVA University",
    location: "Bengaluru, Karnataka, India",
    description: "Pursuing an engineering degree with a dedicated focus on computing foundations, operating system concepts, computer architecture, databases, and software engineering principles.",
    achievements: [
      "Focusing on core coursework in Data Structures, Algorithms, Computer Architecture, and DBMS",
      "Active participant in technical student clubs and campus coding challenges",
      "Collaborating on engineering concepts with peers in Bengaluru's vibrant tech hub"
    ],
    status: "In Progress"
  },
  {
    id: "programming-fundamentals",
    period: "Foundation Phase",
    title: "Mastering Programming Fundamentals in C & C++",
    institution: "Self-Directed & Academic Rigor",
    location: "REVA University",
    description: "Drilled down into procedural and object-oriented foundations. Emphasized understanding compilation pipelines, stack vs. heap allocation, pointer mechanics, and standard library data structures.",
    achievements: [
      "Wrote procedural programs emphasizing clean memory allocation and zero leaks",
      "Learned C++ object-oriented paradigms, classes, inheritance, and STL containers",
      "Built intuition for how higher-level code translates into machine execution"
    ],
    status: "Completed"
  },
  {
    id: "dsa-backend-skills",
    period: "Growth & Skill Expansion",
    title: "Expanding to DSA, Python, SQL & Linux Environment",
    institution: "Engineering Projects & Independent Study",
    location: "Bengaluru, India",
    description: "Broadened technical horizons by adopting Linux as a primary development environment, solving algorithmic problems systematically, and understanding relational database storage with MySQL.",
    achievements: [
      "Practicing problem-solving on arrays, strings, stacks, queues, and tree traversals",
      "Authored SQL queries with complex multi-table joins, subqueries, and constraints",
      "Adopted Git and GitHub for version control and commit hygiene"
    ],
    status: "Milestone"
  },
  {
    id: "projects-hackathons",
    period: "Current & Forward Journey",
    title: "Architecting Projects & Preparing for Hackathons",
    institution: "Developer Communities & Hackathon Circles",
    location: "Bengaluru, India",
    description: "Translating theoretical knowledge into practical software solutions. Designing real-world concept architectures, collaborating with fellow student engineers, and gearing up for hackathons and software internships.",
    achievements: [
      "Conceptualized the Household Service Finder and AI Product Recommendation systems",
      "Refining backend architecture models and low-level C/C++ experiments",
      "Actively seeking engineering internships and project collaborations"
    ],
    status: "In Progress"
  }
];
