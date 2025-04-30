
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    // Add fade-in animation to elements on page load
    const fadeElements = document.querySelectorAll('.fade-content');
    fadeElements.forEach((el, i) => {
      const element = el as HTMLElement;
      element.classList.add('fade-in');
      element.style.animationDelay = `${i * 0.1}s`;
    });
  }, []);

  return (
    <>
      <Header />
      <main className="pt-24 pb-10 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="fade-content opacity-0">
              <img
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
                alt="Jane Doe"
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="fade-content opacity-0">
                <h1 className="text-3xl md:text-4xl font-serif mb-6">About</h1>
                <div className="space-y-4 font-light">
                  <p>
                    Jane Doe is a visual artist and photographer based in New York City, 
                    specializing in minimalist photography that explores the intersection 
                    of architecture, nature, and abstract forms.
                  </p>
                  <p>
                    After graduating from the School of Visual Arts in 2018, Jane has worked 
                    on various commercial and personal projects, exhibiting her work in galleries 
                    across Europe and North America.
                  </p>
                  <p>
                    Her approach to photography focuses on finding beauty in simplicity, using 
                    light and shadow to create compelling compositions that invite contemplation 
                    and emotional response from viewers.
                  </p>
                  <p>
                    When not behind the camera, Jane teaches photography workshops and contributes 
                    to several art publications.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 fade-content opacity-0">
                <h2 className="text-xl font-serif mb-4">Selected Clients</h2>
                <ul className="list-none space-y-1 text-sm">
                  <li>Architectural Digest</li>
                  <li>Vogue Italia</li>
                  <li>MoMA PS1</li>
                  <li>Design Within Reach</li>
                  <li>The New York Times Magazine</li>
                </ul>
              </div>

              <div className="mt-8 fade-content opacity-0">
                <h2 className="text-xl font-serif mb-4">Education</h2>
                <p className="text-sm">BFA in Photography, School of Visual Arts, New York</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
