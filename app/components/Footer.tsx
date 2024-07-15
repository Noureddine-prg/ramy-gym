import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
        <div className="flex space-x-20">
          <div className="flex flex-col space-y-2">
            <h3 className="uppercase text-gray-400">Quick Links</h3>
            <a href="#about" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#trainer" className="text-gray-400 hover:text-white">
              Trainer
            </a>
            <a href="#programs" className="text-gray-400 hover:text-white">
              Programs
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="uppercase text-gray-400">Services</h3>
            <a href="#" className="text-gray-400 hover:text-white">
              Classes
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Private Lessons
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Group Lessons
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="uppercase text-gray-400">Contact Us</h3>
            <a
              href="tel:+1234567890"
              className="text-gray-400 hover:text-white"
            >
              (123) 456-7890
            </a>
            <a
              href="mailto:info@example.com"
              className="text-gray-400 hover:text-white"
            >
              info@example.com
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Get Directions
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0 text-center md:text-right">
          <h2 className="text-2xl font-bold mb-4">FitBox Brooklyn</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
