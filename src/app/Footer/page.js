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
      text: "info@websterwork.com",
      href: "mailto:info@websterwork.com",
    },
    { icon: Phone, text: "+92 326-3377443", href: "tel:+923263377443" },
    { icon: MapPin, text: "Somewhere in the World", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-zinc-900 to-purple-950 rounded-lg flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform duration-300">
              <Box className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Websterwork</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:bg-purple-600 transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-1">
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-purple-500 group-hover:text-white transition-colors duration-300" />
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
                  className="flex items-center space-x-2 text-gray-400 hover:text-purple-600 transition-colors duration-300 group"
                >
                  <contact.icon className="w-4 h-4 text-purple-500 group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 Websterwork. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
