
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
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
      <main className="pt-24 pb-10 px-5 md:px-10 min-h-[70vh] flex items-center">
        <div className="max-w-3xl mx-auto w-full">
          <div className="fade-content opacity-0">
            <h1 className="text-3xl md:text-4xl font-serif mb-8">Contact</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="fade-content opacity-0">
              <p className="mb-6">
                For inquiries about collaborations, exhibitions, or print purchases, 
                please get in touch via email or social media.
              </p>
              
              <div className="space-y-4 mt-8">
                <div>
                  <h2 className="text-lg font-serif mb-2">Email</h2>
                  <a 
                    href="mailto:hello@example.com" 
                    className="text-primary hover:opacity-70 transition-opacity"
                  >
                    hello@example.com
                  </a>
                </div>
                
                <div>
                  <h2 className="text-lg font-serif mb-2">Instagram</h2>
                  <a 
                    href="https://instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:opacity-70 transition-opacity"
                  >
                    @janedoephoto
                  </a>
                </div>
                
                <div>
                  <h2 className="text-lg font-serif mb-2">Based in</h2>
                  <p>New York City</p>
                </div>
              </div>
            </div>
            
            <div className="fade-content opacity-0">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-border bg-transparent outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-border bg-transparent outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 border border-border bg-transparent outline-none focus:border-primary transition-colors"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="py-2 px-6 border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
