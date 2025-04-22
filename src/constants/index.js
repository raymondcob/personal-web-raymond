import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  firebase,
  bootstrap,
  finlo,
  gorceryxpert,
  pocketmobile, 
} from "../assets";

export const navLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "Skills",
    title: "Skills",
  },
  {
    id: "Work",
    title: "Work",
  },
  {
    id: "Contact",
    title: "Contact",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
 
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];


const projects = [
  {
    name: "Finlo Budget",
    description:
      "Finlo is a web-app platform designed to make personal budgeting simple and stress-free. Users can easily add income and expenses, create custom spending categories, and get real-time insights into their financial habits. With a clean, minimalist interface , Finlo offers an efficient and secure way to manage everyday finances.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: finlo,
    source_code_link: "https://github.com/raymondcob/Finlo",
    live_demo_link: "https://www.finlobudget.app/",
  },
  {
    name: "GroceryXpert",
    description:
      "GroceryXpert is a web-based tool that makes grocery shopping smart and budget-friendly. Users can add items to a pre-loaded list, track store prices, and monitor spending in real time. With helpful highlights on savings or overspending, GroceryXpert offers a fast, efficient way to manage everyday grocery expenses.",
    tags: [
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: gorceryxpert,
    source_code_link: "https://github.com/raymondcob/grocery-xpert",
    live_demo_link: "http://groceryxpert.42web.io/?i=1",
  },
  {
    name: "Pocket Mobile",
    description:
      "This website was built for Pocket Mobile, a tech company focused on hardware and mobile solutions. Created free of charge for an Open Day project, it served as a demo to showcase their services and highlight web development skills. Though not official, the site offered a clean, modern interface to represent the brand professionally.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      
    ],
    image: pocketmobile,
    source_code_link: "https://github.com/raymondcob/pocketmobile",
    live_demo_link: "https://pocketmobile.netlify.app/",
  },
];

export {  technologies, projects };