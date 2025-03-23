"use client";

import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <div className="mb-4 text-sm text-gray-400 uppercase tracking-wider">
          Introduction
        </div>

        {/* Section Heading */}
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 bg-secondary rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span>Illinois, United States</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <a href="tel:+17797753627" className="hover:text-primary transition-colors">
                  +1 779-775-3627
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a href="mailto:madhugouthamreddy@gmail.com" className="hover:text-primary transition-colors">
                  madhugouthamreddy@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/madhu-goutham-reddy-ambati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#0077b5]/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/madhugoutham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#333] text-white rounded-lg hover:bg-[#333]/80 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="lg:col-span-2">
            <div className="bg-secondary rounded-lg p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">Professional Summary</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Over 3 years of expertise developing scalable machine learning models, data pipelines, and computer vision solutions.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Proficient in Python, TensorFlow, PyTorch, and advanced ML frameworks, specializing in deep learning, reinforcement learning, and transfer learning.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Achieved a 50% reduction in image analysis time and a 35% improvement in prediction accuracy on high-stakes projects.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Developed production-grade CNN-based algorithms, attaining 84.39% test accuracy in building classification tasks.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Experienced in designing robust MLOps solutions using Apache Spark, Hadoop, ETL pipelines, and AWS cloud services.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Skilled in data analysis and visualization with Pandas, NumPy, Matplotlib, and Power BI for predictive analytics and recommendations.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Published peer-reviewed research on DenseNet-201-based building classification and segmentation techniques.</span>
                </li>
                <li className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>Continuously updating skills and leveraging emerging AI innovations to drive impactful machine learning solutions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
