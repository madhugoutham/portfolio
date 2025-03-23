"use client";

import { Code, Calendar } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Enhanced Image Classification for Unseen Class Detection",
      period: "Oct 2024 - Dec 2024",
      technologies: ["Python", "TensorFlow", "GANs"],
      description: [
        "Constructed a hybrid framework merging GANs with segmentation for unseen class detection, achieving 70.25% accuracy.",
        "Synthesized attribute-conditioned, segmentation-enhanced features to enrich visual representations for zero-shot tasks.",
        "Analyzed operational data to reduce network downtime by 25% and boosted system performance via data-driven optimizations."
      ]
    },
    {
      title: "Predicting Cancer Prevalence from Satellite Imagery",
      period: "Jul 2024 – Aug 2024",
      technologies: ["Python", "TensorFlow", "Deep Learning"],
      description: [
        "Designed 5 ML models to analyze 1M satellite images, forecasting a 20% cancer prevalence.",
        "Utilized OpenCV and computer vision techniques to extract relevant features from satellite images.",
        "Augmented prediction accuracy by 35% while curtailing data processing time by 40%."
      ]
    },
    {
      title: "Assessing Reproducibility of Jupyter Notebooks",
      period: "Dec 2023",
      technologies: ["Jupyter Notebooks", "Python", "MPI", "Dask"],
      description: [
        "Optimized notebooks for extreme-scale computing, increasing computational efficiency by 25%.",
        "Streamlined real-time data analysis workflows using MPI and Dask, achieving 10x faster processing.",
        "Created interactive data visualizations to illustrate the impact of various factors on notebook reproducibility."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <div className="mb-4 text-sm text-gray-400 uppercase tracking-wider">
          Portfolio
        </div>

        {/* Section Heading */}
        <h2 className="section-heading">Featured Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Code className="h-6 w-6 text-primary" />
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{project.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 leading-tight">{project.title}</h3>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-gray-300 text-sm">
                  {project.description.map((desc, descIdx) => (
                    <li key={descIdx} className="flex">
                      <span className="text-primary mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
