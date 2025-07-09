import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Box,
} from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "/home" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/Work" },
    { name: "Process", href: "/Process" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contacts" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "hello@squareup.com",
      href: "mailto:hello@squareup.com",
    },
    { icon: Phone, text: "+91 91813 23 2309", href: "tel:+919181323309" },
    { icon: MapPin, text: "Somewhere in the World", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <Box className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">SquareUp</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-1">
            <span className="text-gray-400 text-sm mr-4">Stay Connected</span>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Contact Information */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300 group"
                >
                  <contact.icon className="w-4 h-4 text-green-500 group-hover:text-green-400 transition-colors duration-300" />
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2023 SquareUp. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
