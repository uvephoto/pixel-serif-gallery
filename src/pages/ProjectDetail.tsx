
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    if (!project) {
      navigate('/');
      return;
    }

    // Add fade-in animation to elements on page load
    const fadeElements = document.querySelectorAll('.project-image-container');
    fadeElements.forEach((el, i) => {
      const element = el as HTMLElement;
      element.classList.add('fade-in');
      element.style.animationDelay = `${i * 0.1}s`;
    });
  }, [project, navigate]);

  if (!project) return null;

  return (
    <>
      <Header />
      <main className="pt-24 pb-10 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-serif mb-4">{project.title}</h1>
            <p className="text-muted-foreground max-w-2xl">{project.description}</p>
            
            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-6 text-sm">
              <div>
                <span className="text-muted-foreground">Year: </span>
                <span>{project.year}</span>
              </div>
              {project.client && (
                <div>
                  <span className="text-muted-foreground">Client: </span>
                  <span>{project.client}</span>
                </div>
              )}
              {project.location && (
                <div>
                  <span className="text-muted-foreground">Location: </span>
                  <span>{project.location}</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-16 md:space-y-32">
            {project.images.map((image, index) => (
              <div key={index} className="project-image-container opacity-0">
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`} 
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
