import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  vue,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  bootstrap,
  docker,
  meta,
  starbucks,
  VU,
  Intelvue,
  laravel,
  SMIT,
  Internspakistan,
  tesla,
  shopify,
  carrent,
  jobit,
  solarecogreen,
  build4u,
  portfolio,
  tripguide,
  threejs,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "BS Computer Science ",
    company_name: "Virtual University Of Pakistan",
    icon: VU,
    iconBg: "#ffffff",
    date: "March 2024 - Continue",
    points: [
      "Pursuing a comprehensive education in computer science with a focus on software development, web technologies, and programming.",
      "Developing strong problem-solving and analytical skills through coursework and hands-on projects.",
      "Gaining practical experience in various programming languages, including Python, JavaScript, and C++.",
      "Engaging in research and learning the latest advancements in data science.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Intelvue",
    icon: Intelvue,
    iconBg: "#ffffff",
    date: "January 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js , Vue.js , Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Devathon ( Web  Development)",
    company_name: "SMIT",
    icon: SMIT,
    iconBg: "#ffffff",
    date: "28 October 2023",
    points: [
      "Participated in the SMIT Devathon, a 7-hour web development competition held at Expo Center with 1500+ developers.",
      "Secured a position in the top 5 by creating a Student LMS (Learning Management System) using React.js and Firebase.",
      "Won a Lenovo Core i7 6th Generation laptop as the winning prize, along with additional gadgets.",
      "Gained valuable real-world experience in collaboration, problem-solving, and rapid development under time constraints.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Interns Pakistan",
    icon: Internspakistan,
    iconBg: "#239e46",
    date: "October 2023 - November 2023",
    points: [
      " Help build and improve web applications using React.js and related frontend technologies.",
      "Gain hands-on experience in structuring web pages with HTML, styling them with CSS, and utilizing Bootstrap to create responsive and visually appealing layouts quickly",
      " Assist in implementing responsive designs smoothly across different devices and browsers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I’m incredibly impressed with the portfolio website created by Sania. It perfectly captures my vision and presents my work in a dynamic, professional way",
    name: "Muhammad Asim",
    designation: "CEO",
    company: "AsimGraphcs",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Demonstrated strong technical skills and a quick ability to learn. Made valuable contributions and showed excellent initiative and teamwork.",
    name: "GrowIntern",
    designation: "Representative",
    company: "GrowIntern",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Property Sale Purchase",
    description:
      "Build4U is an real estate Web-based platform designed to simplify the process of buying, selling, and profiting from properties. Built using Vue.js, Laravel, Bootstrap, and Stripe, the platform offers a seamless, user-friendly experience for listing and browsing properties",
    tags: [
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      }
    ],
    image: build4u,
    source_code_link: "build4u.app",
  },
  {
    name: "Solar Estimate",
    description:
      "SolarEcoGreen is an innovative platform that helps users calculate solar energy savings and installation costs. Built using Vue.js, the SolarEcoGreen Simulator allows users to easily estimate their solar energy potential and savings based on monthly energy bills",
    tags: [
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      }
    ],
    image: solarecogreen,
    source_code_link: "https://www.solarecogreen.fr/passer-au-solarie/",
  },
  {
    name: "Personal Portfolio",
    description:
      "Web-Based Responsive Portfolio is a dynamic, interactive portfolio designed to showcase my achievements and skills, built using React, Three.js, and Framer Motion. The portfolio offers a smooth, responsive design that adapts seamlessly across devices. ",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Emailjs",
        color: "green-text-gradient",
      },
      {
        name: "Framer",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://muhammadasimgraphics.web.app/",
  },
];

export {navLinks, services, technologies, experiences, testimonials, projects };