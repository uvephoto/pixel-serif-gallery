
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center px-5 md:px-10">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">404</h1>
          <p className="text-xl mb-8">Page not found</p>
          <Link 
            to="/" 
            className="border border-primary py-2 px-6 hover:bg-primary hover:text-white transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
