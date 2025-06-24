import { motion } from 'framer-motion';
import { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';

const projects = [
    {
      id: 1,
      title: "Furia Know Your Fan",
      description: "Web platform developed to bring FURIA fans closer to the organization. It allows users to share their interests and social media to personalize their experience, receiving content and recommendations tailored to their profile.",
      technologies: ["React", "Firebase", "AWS"],
      cover: "/public/assets/img/furiaCapa.png",
      link: "https://know-your-fan.vercel.app/",
      gallery: [
        "/public/assets/img/FuriaKYFPrint.PNG",
        "/public/assets/img/FuriaKYFPrint2.PNG",
        "/public/assets/img/Hubpage_Furia.png",
      ]
    },
    {
      id: 2,
      title: "Slow Games",
      description: "News portal about video games and pop culture, inspired by the FlowGames.gg website.",
      technologies: ["HTML/CSS", "Javascript"],
      cover: "/public/assets/img/SlowGames.png",
      link: "https://lucas07918.github.io/Slow-Games/",
      gallery: [
        "/public/assets/img/SlowGamesHome.PNG",
        "/public/assets/img/SlowGamesPrint.PNG"
      ]
    },
    {
      id: 3,
      title: "Diet Generator",
      description: "A personalized diet generator website that allows you to create a custom meal plan with just one click.",
      technologies: ["Python", "Flask",],
      cover: "/public/assets/img/DietGeneratorCapa.png",
      link: "https://github.com/Lucas07918/Gerador-de-Dieta---Projeto",
      gallery: [
        "/public/assets/img/geradorDieta-white.PNG",
        "/public/assets/img/geradorDieta-dark.PNG",
        "/public/assets/img/Print gerador de dieta.PNG",
        "/public/assets/img/geradorDieta-dark2.PNG"
      ]
    },
  ];
   // (Cola aqui os dados que te passei)

   const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
  
    return (
      <section className="projects-section" id="projects">
  <div className="container">
        <h2 className="headline headline-2 section-title" id="tag-label">
          <span className="span">Projects</span>
        </h2>
  </div>

  <div className="carousel">
    {projects.map((project) => (
      <motion.div
        key={project.id}
        className="project-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.02 }}
      >
        <img src={project.cover} alt={project.title} />
        <h3>{project.title}</h3>
        <button onClick={() => setSelectedProject(project)}>Ver mais</button>
      </motion.div>
    ))}
  </div>

  {selectedProject && (
    <ProjectModal
      project={selectedProject}
      onClose={() => setSelectedProject(null)}
    />
  )}
</section>

    );
  };
  
  export default Projects;
  
