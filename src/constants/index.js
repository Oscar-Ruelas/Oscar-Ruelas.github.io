import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Oscar Ruelas, I'm a undergrad student at Eastern Washington University studying Computer Science.",
  description:
    "I'm passionate about creating new things and learning new technologies. I'm always looking for new opportunities to grow and expand my knowledge.",
};

export const PROJECTS = [
  {
    name: "Landing Page",
    image: project1,
    link: "https://github.com/Oscar-Ruelas/My-Landing-Page",
  },
  {
    name: "Date-Time Website",
    image: project2,
    link: "https://github.com/Oscar-Ruelas/date-time-tailwind",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated beginner backend developer with a passion for learning and building reliable, efficient systems. My experience so far has been focused on creating small-scale command-line programs using technologies like Java, JavaFX, Kotlin, and C#. These projects have provided me with a solid foundation in backend development principles and problem-solving.",
    "I am eager to expand my knowledge and take on more challenging projects while continuing to improve my skills. As I grow as a developer, I look forward to exploring how backend systems integrate with frontend interfaces to deliver complete and user-friendly applications.",
    "Currently, I am expanding my skill set by learning frontend development using HTML, CSS, React, Astro, Daisy UI, and Tailwind CSS. This journey enables me to better understand the complete stack, bridging the gap between backend and frontend for cohesive, user-focused solutions. I thrive in environments that challenge me to innovate and grow continuously.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2020 - 2023",
    title: "IT Technician at Davenport School District",
    location: "Davenport, WA",
    description: [
      "Worked with a third party company, ESD 101, to provide IT support for the Davenport School District.",
      "Assisted with troubleshooting and resolving technical issues for staff and students.",
      "Managed and maintained the district's technology infrastructure, including computers, printers, and network equipment.",
    ],
  },
];

export const CONTACT_CONTENT = {
  headline: "I'm excited to hear about new opportunities!",
  description:
    "Whether you want to hire me for your next project, have a question, or just want to say hi, feel free to get in touch. I'm always open to new connections and collaborations.",
  email: "oruelas@ewu.edu",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Oscar-Ruelas",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/oscar-ruelas-9aaa2a195/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Oscar Ruelas. All rights reserved.`,
};
