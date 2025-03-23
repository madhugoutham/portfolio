"use client";

import Link from "next/link";
import { Linkedin, GitHub, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/madhu-goutham-reddy-ambati/",
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: "GitHub",
      url: "https://github.com/madhugoutham",
      icon: <GitHub className="h-5 w-5" />
    },
    {
      name: "Email",
      url: "mailto:madhugouthamreddy@gmail.com",
      icon: <Mail className="h-5 w-5" />
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-secondary pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* About Column */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Madhu Goutham Reddy Ambati</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Machine Learning Engineer & Computer Vision Specialist with expertise in developing scalable ML models,
              data pipelines, and computer vision solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/30 hover:bg-background/50 rounded-full transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Illinois, United States</li>
              <li>+1 779-775-3627</li>
              <li className="break-all">madhugouthamreddy@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 text-center sm:text-left text-gray-500 text-sm">
          <p>© {currentYear} Madhu Goutham Reddy Ambati. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
