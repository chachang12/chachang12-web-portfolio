import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ProjectInstances from '../models/ProjectInstances';
import { arrow } from '../assets';
import ProjectCard from './ProjectCard';

const Instances = () => {
  return (
    <div className='flex justify-center'>
        <div>
            {ProjectInstances.map((project, index) => (
                project.link.startsWith('http') ? (
                  // External link
                  <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                    <ProjectCard project={project} />
                  </a>
                ) : (
                  // Internal link using Link component
                  <Link to={project.link} key={index}>
                    <ProjectCard project={project} />
                  </Link>
                )
            ))}
        </div>
    </div>
  );
}

// Extracted project content into its own component for reusability


export default Instances;