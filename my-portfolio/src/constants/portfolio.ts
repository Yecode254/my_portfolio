import {
  Rocket, Zap, Smartphone, Shield,
  Code2, Server, Database, Wrench, Cloud,
  Code2 as Github, Camera as Instagram, BriefcaseBusiness as Linkedin, Mail, Phone, MessageCircle,
  Layers, Gauge, RefreshCw, Layout, PenTool,
} from "lucide-react";

export const SOCIALS = {
  github: "https://github.com/Yecode254",
  instagram: "https://www.instagram.com/y._e._g._o",
  linkedin: "https://www.linkedin.com/in/eddy-yego-40id",
  email: "mailto:eddyyego2006@gmail.com",
  phone: "tel:+254714699645",
  whatsapp: "https://wa.me/254714699645",
} as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: SOCIALS.github, icon: Github, external: true },
  { label: "Instagram", href: SOCIALS.instagram, icon: Instagram, external: true },
  { label: "LinkedIn", href: SOCIALS.linkedin, icon: Linkedin, external: true },
  { label: "Email", href: SOCIALS.email, icon: Mail, external: false },
  { label: "Phone", href: SOCIALS.phone, icon: Phone, external: false },
  { label: "WhatsApp", href: SOCIALS.whatsapp, icon: MessageCircle, external: true },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  
  { label: "Contact", href: "#contact" },
];

export const HIGHLIGHTS = [
  { icon: Rocket, title: "Modern Web Development", desc: "Cutting-edge stack with React 19, TypeScript & modern tooling." },
  { icon: Zap, title: "High Performance", desc: "Blazing fast apps optimized for Core Web Vitals & Lighthouse 95+." },
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect layouts across every device and viewport." },
  { icon: Shield, title: "Secure Applications", desc: "Best-practice authentication, validation and hardened backends." },
];

export const SKILL_GROUPS = [
  {
    title: "Frontend", icon: Code2,
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend", icon: Server,
    skills: [
      { name: "Python", level: 92 },
      { name: "Django", level: 90 },
      { name: "Django REST Framework", level: 88 },
    ],
  },
  {
    title: "Databases", icon: Database,
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    title: "Tools", icon: Wrench,
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 95 },
      { name: "VS Code", level: 98 },
      { name: "Figma", level: 82 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    title: "Deployment", icon: Cloud,
    skills: [
      { name: "Nginx", level: 82 },
      { name: "Gunicorn", level: 80 },
      { name: "Cloudflare", level: 85 },
      { name: "Docker", level: 80 },
    ],
  },
];

export const EXPERIENCES = [
  {
    role: "Freelance Full Stack Developer",
    org: "Self-employed",
    period: "2024 — Present",
    desc: "Delivering premium web applications for clients across Africa. Building modern frontends with React and TypeScript, and robust APIs with Django.",
  },
  {
    role: "University Projects",
    org: "Academic Portfolio",
    period: "2023 — Present",
    desc: "Led full-stack academic projects including student management systems, data dashboards, and REST APIs with a focus on clean architecture.",
  },
  {
    role: "Open Source Contributor",
    org: "GitHub Community",
    period: "2023 — Present",
    desc: "Contributed bug fixes, features and documentation to open-source Python and JavaScript projects, sharpening collaboration and code quality skills.",
  },
  {
    role: "Software Engineering Internship",
    org: "Startup Collaboration",
    period: "2023",
    desc: "Worked alongside senior developers on production Django services and React frontends. Learned deployment, testing and agile workflows.",
  },
];

import projectCollege from "@/assets/project-college.jpg";
import projectBookstore from "@/assets/project-bookstore.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";

export const PROJECTS = [
  {
    title: "Moiben Technical and Vocational College Website",
    desc: "Designed and developed a modern, responsive institutional website that improves the college's online presence. Built with a focus on accessibility, clean UI, responsive layouts, and an intuitive experience for students, staff, and prospective applicants.",
    tech: ["React", "Vite", "JavaScript", "CSS", "HTML"],
    image: projectCollege,
    github: "https://github.com/Yecode254/moiben-tvc",
    demo: null,
    demoStatus: "Not currently deployed — coming soon",
  },
  {
    title: "Online Book Store Website",
    desc: "Developed a responsive full-stack online bookstore that enables users to browse, search, and manage books efficiently. Focused on responsive layouts, intuitive user experience, and scalable backend integration.",
    tech: ["React", "Flask", "Python", "JavaScript", "SQL"],
    image: projectBookstore,
    github: "#",
    demo: null,
    demoStatus: "Not currently deployed — coming soon",
  },
  {
    title: "Personal Portfolio Website",
    desc: "Designed and developed a modern personal portfolio showcasing my skills, experience, and software development projects. Built with smooth animations, responsive layouts, and optimized performance.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    image: projectPortfolio,
    github: "https://github.com/Yecode254/my_portfolio",
    demo: "#",
  },
];

export const SERVICES = [
  { icon: Layout, title: "Frontend Development", desc: "Interactive, accessible interfaces with React, TypeScript & Tailwind." },
  { icon: Server, title: "Backend Development", desc: "Reliable Django backends with clean architecture and testing." },
  { icon: Layers, title: "REST API Development", desc: "Well-documented, secure REST APIs powered by Django REST Framework." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Modernize outdated sites into fast, beautiful, conversion-focused experiences." },
  { icon: Gauge, title: "Performance Optimization", desc: "Audit and tune Core Web Vitals for consistently premium performance." },
  { icon: PenTool, title: "UI Implementation", desc: "Turn Figma designs into production-grade, pixel-perfect components." },
];

export const TECH_STACK = [
  "React", "TypeScript", "Tailwind CSS", "Python", "Django", "PostgreSQL", "Git", "Docker", "Linux",
];

export const STATS = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 100, suffix: "%", label: "Commitment" },
  { value: 3, suffix: "+", label: "Years Learning" },
  { value: 10, suffix: "+", label: "Technologies" },
];

export const FLOAT_CARDS = [
  "React Developer",
  "Django Backend",
  "UI/UX Enthusiast",
  "Problem Solver",
];
