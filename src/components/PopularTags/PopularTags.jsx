// src/components/PopularTags.jsx

import React, { useState } from 'react';
import './PopularTags.css';

import { FaAngular, FaCss3Alt, FaPython, FaReact } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';


// ---------- Skills Data ----------
const skills = [
  { name: 'React', icon: <FaReact />, level: 'Intermediate' },
  { name: 'JavaScript', icon: <RiJavascriptFill />, level: 'Intermediate' },
  { name: 'TypeScript', icon: <BiLogoTypescript />, level: 'Basic' },
  { name: 'CSS', icon: <FaCss3Alt />, level: 'Intermediate' },
  { name: 'Python', icon: <FaPython />, level: 'Basic' },
  { name: 'Angular', icon: <FaAngular />, level: 'Basic' },
];


// ---------- Component ----------
const PopularTags = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="tags section" aria-labelledby="tag-label" id="skills">
      <div className="container">
        <h2 className="headline headline-2 section-title" id="tag-label">
          <span className="span">Skills</span>
        </h2>

        <ul className="grid-list">
          {skills.map((skill) => (
            <li key={skill.name}>
              <button
                className="card tag-btn"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div style={{ fontSize: '3rem' }}>{skill.icon}</div>
                <p className="btn-text">{skill.name}</p>

                {hoveredSkill === skill.name && (
                  <div className="tooltip">{skill.level}</div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularTags;
