// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Amari",
  middleName: "",
  lastName: "Swain",
  message: "| Student | Clinical Informatics Analyst | Business Analyst | Content Creator | Cancer Survivor |",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/AmariSwain",
    },
    //{
      //image: "fa-facebook",
      //url: "https://www.facebook.com/hashirshoaeb",
    //},
    //{
      //image: "fa-github",
      //url: "https://public.tableau.com/app/profile/amari.swain",
    //},
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/amari-swain/",
    },
    //{
      //image: "fa-twitter",
      //url: "https://www.twitter.com/hashirshoaeb/",
    //},
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Linkedin pfp2.png"),
  imageSize: 500,
  message:
    "My name is Amari Swain. I am a graduate student at Purdue University pursuing a Master's degree in Health Informatics with a background in Criminal Justice and a minor in Software Development from the University of North Carolina at Charlotte. My passion for using technology to improve healthcare stems from my personal experiences as a Cancer patient and my desire to give back to the community. With a strong commitment to continuous learning and growth, my portfolio on GitHub showcases various projects demonstrating my dedication to using technology to drive positive change in healthcare. I believe my experiences and skills make me well-equipped to make a positive impact in the industry, and I remain steadfast in my goal to utilize technology to enhance healthcare for all individuals and communities.", 
  
  resume: require("../editable-stuff/AmariSwainResume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "AmariSwain", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["HealthcareForm-database","COVID-19-Database", "CovidPortfolioProjects",  "NashvilleHousingPortfolioProject"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "SQL", value: 70 },
    { name: "Tableau", value: 55 },
    { name: "Data Structures", value: 50 },
    { name: "R Studio", value: 40 },
    { name: "Microsoft Suites", value: 90 },
    { name: "Mac & Pc Troubleshooting", value: 65 },
    { name: "Python", value: 25 },
    { name: "Java", value: 20 },
    { name: "Project Management", value: 55 },
    { name: "Knowledge of Data Governance & Management", value: 40 },
    { name: "Knowledge of Interoperability Standards", value: 40 },
    { name: "Knowledge of HIT", value: 40},
    { name: "Technical Writing", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Customer Service", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Communication", value: 85 },
    { name: "Critical Thinking", value: 90 },
    { name: "Time Management", value: 80 },
    { name: "Leadership", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time hybrid telecommuter Health Infomatics or Business Analyst opportunities! If you know of any positions available or if you have any questions, please feel free to email me at",
  email: "aswainno@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
