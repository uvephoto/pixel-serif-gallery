
import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  coverImage: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, coverImage, className }) => {
  return (
    <Link to={`/project/${id}`} className={`project-card block ${className || ''}`}>
      <img 
        src={coverImage} 
        alt={title} 
        className="aspect-[3/4] md:aspect-[1/1]"
      />
      <div className="project-title">
        <h2 className="text-white text-xl md:text-2xl font-serif">{title}</h2>
      </div>
    </Link>
  );
};

export default ProjectCard;
