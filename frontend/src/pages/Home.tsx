import minhaFoto from "../assets/eu2.jpeg";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "The Controller",
    description:
      "Command Line tool written in Python with Textual which facilitates the copy, delete and move of files and directories in a simple and efficient way.",
    link: "https://github.com/Gabriel-Gerhardt/The_Controller",
  },
  {
    title: "FileMorph",
    description:
      "Web application for archive conversion in many formats, including DOCX, PDF and PAGES. Written in Golang(Gin) and React.",
    link: "https://github.com/Gabriel-Gerhardt/FileMorph",
  },
  {
    title: "Pong-game",
    description:
      "Classic Pong game developed in Python using Pygame, used to understand the basics of game development.",
    link: "https://github.com/Gabriel-Gerhardt/pong_game",
  },
];

function Home() {
  const [clickedLinks, setClickedLinks] = useState(
    Array(projects.length).fill(false),
  );

  const handleClick = (index: number) => {
    const newClicked = [...clickedLinks];
    newClicked[index] = true;
    setClickedLinks(newClicked);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 pt-20">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-purple-800 text-white h-20 px-8 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          <h1 className="text-2xl font-bold">Gabriel Gerhardt de Marque</h1>
          <div className="flex gap-6 text-sm">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:email@exemplo.com"
              className="hover:underline"
            >
              Email
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Gabriel-Gerhardt"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/gabriel-gerhardt-0a8b852b9/"
              className="hover:underline"
            >
              Linkedin
            </a>
          </div>
        </div>
      </header>

      {/* Sobre Mim */}
      <section id="sobre" className="py-2 px-4 mt-28">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 min-h-[500px]">
          <div className="w-full md:w-1/3">
            <img
              src={minhaFoto}
              alt="Gabriel Gerhardt de Marque"
              className="w-96 h-96 rounded-full object-cover shadow mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3 text-justify">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
              About Me
            </h2>
            <p className="text-base leading-relaxed">
              Hi, I'm a Software Engineering student at PUCRS, passionate about
              technology and creating solutions that combine technical
              efficiency with real-world impact. I have hands-on experience with
              full stack development, with a focus on backend, working with
              modern tools such as React, NestJS, PostgreSQL, Golang, and
              MongoDB. I’m also familiar with best practices in version control,
              documentation, and testing.
            </p>
            <p className="text-base leading-relaxed mt-4">
              Throughout my degree, I have taken part in interdisciplinary
              projects with multidisciplinary teams, where I developed not only
              technical skills but also interpersonal ones — such as leadership,
              organization, and clear communication.
            </p>
            <p className="text-base leading-relaxed mt-4">
              I am fluent in English, which allows me to collaborate with
              international teams. I am constantly evolving, learning, building,
              and contributing to projects that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Competências */}
      <section id="competencias" className="py-12 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-8 text-center min-h-[500px] flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="flex flex-col gap-12 text-left text-gray-700 items-center md:items-start">
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
                Interpersonal
              </h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Fluent English</li>
                <li>Teamwork, Leadership</li>
                <li>Organization, Adaptability</li>
              </ul>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
                Technical
              </h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>
                  Web Development (Frontend): HTML5, CSS3, React, TailwindCSS
                </li>
                <li>
                  Web Development (Backend): Golang (Gin), Node.js, Nest.js,
                  Spring Boot
                </li>
                <li>Databases: PostgreSQL, OracleSQL, MongoDB, Prisma</li>
                <li>
                  Programming Languages: Javascript/Typescript, Java, Python,
                  C++, C e Go
                </li>
                <li>Tools: Git, Github, LaTeX, Microsoft Office, Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-2 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-8 min-h-[500px]">
          <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            {projects.map((proj, index) => (
              <ProjectCard
                key={index}
                project={proj}
                index={index}
                clicked={clickedLinks[index]}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
