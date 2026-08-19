import { Code2, Server, Database, Layout, Smartphone, Mail, Trophy, Users } from "lucide-react";
import { FaJava, FaPython, FaAws, FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiMysql, SiJavascript, SiTypescript, SiGit, SiMongodb } from "react-icons/si";

export const PERSONAL_INFO = {
  name: "Vobilisetti Akhilesh",
  role: "B.Tech Computer Science Student | Full Stack Developer",
  email: "akhilesh70506@gmail.com",
  github: "https://github.com/itsakhilesh7",
  linkedin: "https://linkedin.com/in/vobilisetti-akhilesh",
  phone: "(+91) 7993366777",
  shortBio: "I am a second-year B.Tech CS student and passionate Full Stack Developer specializing in Next.js and modern web technologies. I love building scalable applications and intuitive user experiences.",
  stats: [
    { label: "GPA", value: "8.0" },
    { label: "Internships", value: "2+" },
    { label: "Awards", value: "2" },
  ],
  heroTyping: [
    "Full Stack Developer",
    "Creative Problem Solver",
    "IoT Enthusiast",
    "CS Undergrad"
  ]
};

export const EDUCATION = [
  {
    institution: "Manipal University Jaipur",
    degree: "B.Tech Computer Science",
    duration: "Aug 2024 – May 2028",
    details: "GPA: 8.0/10.0"
  },
  {
    institution: "Narayana School, Hyderabad",
    degree: "Intermediate MPC",
    duration: "2022–2024",
    details: "85 Percentile"
  }
];

export const EXPERIENCE = [
  {
    company: "SmartSoft Solutions (Pvt. Ltd.)",
    role: "Software Development Intern",
    duration: "Jun–Jul 2025",
    points: [
      "Built a full-stack cab service app using Next.js + Supabase for pincode-to-pincode bookings",
      "Implemented secure auth and real-time dynamic fare calculation engine",
      "Designed responsive UI for seamless desktop and mobile experience"
    ]
  },
  {
    company: "Accenflair (Pvt. Ltd.)",
    role: "Frontend Development Intern",
    duration: "Jul–Aug 2025",
    points: [
      "Built responsive food ordering portal with cart and dynamic category menus",
      "Integrated Supabase for auth, database management, and real-time order tracking",
      "Reduced manual order processing steps for restaurant staff"
    ]
  }
];

export const PROJECTS = [
  {
    title: "Cab Service App",
    description: "Pincode-to-pincode cab booking with secure auth and real-time fare calculation.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    link: "#",
    github: "#"
  },
  {
    title: "Full Stack Food Ordering System",
    description: "Complete ordering platform with menus, cart, auth, and order tracking.",
    tech: ["Next.js", "Supabase", "React Context"],
    link: "#",
    github: "#"
  },
  {
    title: "Database Management Application",
    description: "SQL app demonstrating complex queries, data modification, and integrity enforcement.",
    tech: ["MySQL", "Node.js", "Express"],
    link: "#",
    github: "#"
  }
];

export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: Database }
    ]
  },
  {
    category: "Frameworks & Libs",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "MERN Stack", icon: SiMongodb }, // Placeholder icon for MERN
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "Supabase", icon: SiSupabase },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: FaGithub }
    ]
  }
];

export const AWARDS = [
  {
    title: "Top 3 — IEEE × SNATCH Coding Competition",
    description: "Secured top placement out of numerous participants in an algorithmic coding contest.",
    icon: Trophy
  },
  {
    title: "Top 3 — BLIND BYTE Coding Competition",
    description: "Demonstrated strong problem-solving skills under unique constraints.",
    icon: Trophy
  }
];

export const LEADERSHIP = [
  {
    role: "Deputy Technical Secretary",
    organization: "Turning Sapiens IoT Club, MUJ",
    duration: "2024–Present",
    description: "Co-leading technical initiatives, organizing IoT workshops, and guiding junior members in hardware-software integration.",
    icon: Users
  },
  {
    role: "Head of Technology",
    organization: "Apex Community, MUJ",
    duration: "2024–Present",
    description: "Managing tech team, overseeing website development, and ensuring digital infrastructure runs smoothly for community events.",
    icon: Users
  }
];
