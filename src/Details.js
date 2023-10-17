// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/MyProfile2.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import nodeJS from "./assets/techstack/nodejs.png";
import ExpressJS from "./assets/techstack/express.png";
import MongoDB from "./assets/techstack/MongoDB.png";
import MySQL from "./assets/techstack/Mysql.png";
// Porject Images
import projectImage1 from "./assets/projects/Flash.jpg";
import projectImage2 from "./assets/projects/Backend.jpg";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mayuri Khobragade",
  tagline: "I build things for web",
  img: profile,
  about: `Full Stack Developer offering advanced knowledge of Javascript, Java & ReactJS, as well as extensive experience with Modern web development
  Frameworks and Libraries. Dynamic Developer skilled at developing complex solutions possessing strong creative thinking skills, problem solving
  ability and integrity. Passionate about coding and enjoying my work.
  `,
};

// Social Media URLs 
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mayuri-khobragade/",
  github: "https://github.com/mayuri2920",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Work Experience 
export const workDetails = [
  {
    Position: "Web Develoment Trainee",
    Company: `AlmaBetter`,
    Location: "Bengaluru (Remote)",
    Type: "Full Time",
    Duration: "August 2022 - August 2023",
  },
  
];

// Enter your Education Details here
export const eduDetails = [
  
  {    
    Position: "Master's of Computer Application",
    College: `Shri Ramdeobaba College of Engineering and Management`,
    Location: "Nagpur",
    Type: "Full Time",
    Duration: "2020 - 2022",
  },
  {    
    Position: "Bachelor of Science",
    College: `M. P. Deo Memorial Dharampeth Science College`,
    Location: "Nagpur",
    Type: "Full Time",
    Duration: " 2017 - 2020",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  nodeJS : nodeJS,
  ExpressJS : ExpressJS, 
  MongoDB :MongoDB,
  MySQL : MySQL,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "FlashCard - Generator",
    image: projectImage1,
    description: `This app generates flashcards based on the given input on Create New page. The User then can browse through the various flashcard groups they have created, And they can view/share/download Flashcards from its respective page.`,
    techstack: ": React.js , react-Redux , TailwindCSS , Formik , Frontend",
    previewLink: "https://flashcard-generator-project.vercel.app/",
    githubLink: "https://github.com/mayuri2920/Flashcard_generator_Project",
  },
  {
    title: "Get-Youtube-Subscribers",
    image: projectImage2,
    description: `Designed and developed a REST API that performs the GET method. Two operations were performed: Fetching a list of all the dummy data, Fetching a particular dummy
    data based on the given ID from the Youtube Subscribers list.`,
    techstack: "ExpressJS , mongoDb , NodeJS , Postman ,HTTP requests",
    previewLink: "https://getyou-tube-subscribers-560z20ltq-mayuri2920.vercel.app/",
    githubLink: "https://github.com/mayuri2920/GET-YouTubeSubscribers",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "mayurikhobragade85520@gmail.com",
  phone: "+91 8552025171",
};
