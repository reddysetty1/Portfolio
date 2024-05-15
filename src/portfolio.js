/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vamshi Krishna",
  title: "Hi all, I'm Vamshi",
  subTitle: emoji(
    "A passionate results-driven Software Developer having an experience in cross-platform (web and client-server) application development, design using object-oriented programming and cloud technologies."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1h0OrSGvcDU4ibAYw17tgvUqCB47kfmMLpN7f_2pGVOU/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/vamshikrishna07/",
  gmail: "reddysetty.vamshi@gmail.com",
  // instagram: "https://www.instagram.com/vam_shhh/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Design highly interactive Front end / User Interfaces for your web and mobile applications."
    ),
    emoji(
      "⚡ Develop J2EE applications and RESTful web services using Spring MVC and Spring boot."
    ),
    emoji("⚡ Strong background with the core java concepts like Stream APIs, collections, exception handling, multithreading and executor service."),
    emoji("⚡ Deep knowledge on cloud technologies, such as Amazon Web Services (AWS).")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java 8/11/17",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-plus"
    },
    {
      skillName: "MS Office",
      fontAwesomeClassname: "fab fa-windows"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Central Missouri",
      logo: require("./assets/images/ucmlogo.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2022 - May 2023",
      desc: "Enriched my academic journey by delving into a comprehensive array of computer science subjects, including Algorithms, Compiler Design, Database Systems, Operating Systems, alongside cutting-edge technologies such as Artificial Intelligence, Big Data, and Cloud Computing.",
      descBullets: [
       
      ]
    },
    {
      schoolName: "Osmania University",
      logo: require("./assets/images/oulogo.png"),
      subHeader: "Bachelor of Engineering",
      duration: "August 2014 - June 2018",
      desc: "Majored in Electrical engineering and worked on a major project about a multilevel inverter with reduced number of Switches(Simulated the entire project using MATLAB).",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Server-side development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Client side development",
      progressPercentage: "70%"
    },
    {
      Stack: "Database",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Tek and Company",
      companylogo: require("./assets/images/teknco.png"),
      date: "May 2023 – Present",
      desc: "Designed and developed an enterprise-level RESTful microservice architecture using Java, J2EE, Spring MVC, Hibernate, React JS, SQL server and MongoDB.",
    },
    {
      role: "Student Testing Admin",
      company: "University of Central Missouri",
      companylogo: require("./assets/images/ucmule.png"),
      date: "May 2022 – May 2023",
      desc: "Managed data migration to University Banner ERP on Ellucian cloud from diverse sources and administered secure Linux systems for online exams, configuring Secure Shell (SSH) for remote access."
    },
    {
      role: "CRM Developer",
      company: "Deloitte",
      companylogo: require("./assets/images/deloittelogo.jpg"),
      date: "May 2017 – May 2018",
      desc: "Developed REST APIs with Spring MVC, utilizing core Java APIs, collections, Java 8 streams, multithreading, and object-oriented principles."
    },
    {
      role: "QA Associate",
      company: "Amazon",
      companylogo: require("./assets/images/amazon.jpg"),
      date: "May 2017 – May 2018",
      desc: "Performed Black box testing, Manual and functional Testing on a Amazon watch party applications and executed end-to-end testing with wie range of test cases."
    },
    {
      role: "CAP Analyst",
      company: "Amazon",
      companylogo: require("./assets/images/amazon.jpg"),
      date: "May 2017 – May 2018",
      desc: "Performed Data analysis on customer accounts for potential risks to Amazon ecosystem, investigating suspicious activities and behaviors."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "SOME PROJECT THAT I CREATED TO MAKE MY WORK SIMPLE",
  projects: [
    {
      // image: require(""),
      projectName: "Testing Services",
      projectDesc: "MERN stack application",
      projectBullets: ["Developed a dynamic single-page web application using React, Node.js, Express.js and MongoDB, catering to both students and testing centers for efficient appointment scheduling."]
      
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: ""
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      projectName: "Email Broadcast",
      projectDesc: "Spring boot application",
      projectBullets: ["Designed a microservice based spring boot application using Java 11 and Spring data JPA for relating objects with the MySQL database which has all the data to broadcast emails."]
      
    },
    {
      projectName: "Banking Application",
      projectDesc: "Maven application",
      projectBullets: ["Developed an interactive web application using Spring and Hibernate, ensuring application security with Spring Security, managing user authentication and authorization with base64 encoder."]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "",
      subtitle:
        "",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      title: "",
      subtitle:
        "",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    },

    {
      title: "",
      subtitle: "",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "",
  subtitle:
    "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Just want to say hi? My Inbox is open for all.",
  number: "+1(980)880-2555",
  email_address: "reddysetty.vamshi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
