
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 px-5 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>© {currentYear} Jane Doe Photography</p>
        <div className="mt-4 md:mt-0">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mr-6 hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <a 
            href="mailto:hello@example.com" 
            className="hover:text-foreground transition-colors"
          >
            hello@example.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
