import React from 'react';
import { Link } from 'react-router-dom';
import ProjectInstances from '../constants/ProjectInstances';
import ProjectCard from './ProjectCard';

const Instances = () => {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-wrap gap-4'> {/* Added gap-4 for spacing between cards */}
            {ProjectInstances.map((project, index) => (
                project.link.startsWith('http') ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                    <ProjectCard project={project} />
                  </a>
                ) : (
                  <Link to={project.link} key={index}>
                    <ProjectCard project={project} />
                  </Link>
                )
            ))}
        </div>
    </div>
  );
}

export default Instances;