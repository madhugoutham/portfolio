"use client";

import { Award, CheckCircle2 } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Delegating Tasks",
      issuer: "LinkedIn Learning",
      year: "2022"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2022"
    },
    {
      name: "Learning Jira Software",
      issuer: "LinkedIn Learning",
      year: "2021"
    },
    {
      name: "SQL: Data Reporting and Analysis",
      issuer: "LinkedIn Learning",
      year: "2021"
    },
    {
      name: "SQL Essential Training",
      issuer: "LinkedIn Learning",
      year: "2021"
    },
    {
      name: "Python Data Structures",
      issuer: "Coursera",
      year: "2020"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <div className="mb-4 text-sm text-gray-400 uppercase tracking-wider">
          Credentials
        </div>

        {/* Section Heading */}
        <h2 className="section-heading">Professional Certifications</h2>

        {/* Award Icon */}
        <div className="flex justify-center mb-10">
          <Award className="h-16 w-16 text-primary opacity-70" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-lg p-5 hover:shadow-lg transition-all duration-300 flex items-start"
            >
              <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {cert.issuer} | {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
