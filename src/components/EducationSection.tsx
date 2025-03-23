"use client";

import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Northern Illinois University",
      location: "DeKalb, IL",
      period: "Aug 2023 – May 2025",
      gpa: "3.7"
    },
    {
      degree: "Bachelor of Technology",
      institution: "SRM Institute of Science & Technology",
      location: "Chennai, India",
      period: "Jul 2017 – Jun 2021",
      gpa: "3.8"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <div className="mb-4 text-sm text-gray-400 uppercase tracking-wider">
          Academic Background
        </div>

        {/* Section Heading */}
        <h2 className="section-heading">Education</h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                  <p className="text-lg mb-2">{edu.institution}</p>

                  <div className="flex flex-wrap gap-y-2 gap-x-6 mt-4 text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">GPA:</span>
                      <span className="text-primary">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
