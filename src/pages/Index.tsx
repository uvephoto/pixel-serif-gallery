
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Index = () => {
  useEffect(() => {
    // Add fade-in animation to elements on page load
    const fadeElements = document.querySelectorAll('.project-grid > div');
    fadeElements.forEach((el, i) => {
      const element = el as HTMLElement;
      element.classList.add('fade-in');
      element.style.animationDelay = `${i * 0.1}s`;
    });
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen w-full pt-24 pb-10 px-5 md:px-10">
        <div className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="opacity-0">
              <ProjectCard
                id={project.id}
                title={project.title}
                coverImage={project.coverImage}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
