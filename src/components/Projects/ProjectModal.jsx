import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
    );
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      nextImage();
    } else if (info.offset.x > 100) {
      prevImage();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="modal-content"
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100vh', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        >
          <button className="close-btn" onClick={onClose}>
            <IoClose size={32} />
          </button>

          <div className="modal-body">
            <div className="modal-left">
              <motion.img
                key={project.gallery[currentImage]}
                src={project.gallery[currentImage]}
                alt={project.title}
                className="modal-image"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />

              <div className="carousel-buttons">
                <button onClick={prevImage}>&larr;</button>
                <button onClick={nextImage}>&rarr;</button>
              </div>

              <div className="paginator">
                {project.gallery.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${
                      index === currentImage ? 'active' : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="modal-right">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.title}
              </motion.h2>

              <motion.p
                className="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {project.description}
              </motion.p>

              <div className="technologies">
                <h4>Tecnologies:</h4>
                <div className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="tech-item"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="project-link">
                  <p>Check it out:</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel || 'Visit Project'}
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
