"use client";

import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Machine Learning Research & Computer Vision Specialist",
      company: "Northern Illinois University",
      location: "DeKalb, IL",
      period: "Aug 2023 – Present",
      type: "Graduate Research Assistant",
      responsibilities: [
        "Engineered and deployed production-grade deep learning models using Python, TensorFlow, and PyTorch, cutting image analysis time by 50% for cancer detection projects.",
        "Engineered scalable pipelines to process over 5 TB of satellite imagery, cutting processing time by 60% and enabling real-time inference.",
        "Deployed innovative computer vision algorithms with CNNs for image classification and capturing, boosting overall accuracy and robustness.",
        "Documented findings and co-authored a peer-reviewed paper, 'Building Classification: A Comprehensive Dataset and DenseNet201-Based Approach.'",
        "Leveraged DenseNet-201 to classify 15,329 high-resolution images into seven building categories, achieving 84.39% test accuracy.",
        "Integrated segmentation modules with test-time augmentation and morphological post-processing, reducing misclassifications and boosting precision.",
        "Collaborated with cross-functional teams, presenting research outcomes and sharing code and metrics to drive urban planning innovations."
      ]
    },
    {
      title: "Software Engineer",
      company: "Tata Consultancy Services",
      location: "Hyderabad, India",
      period: "May 2021 – Jul 2023",
      type: "Client: Experian",
      responsibilities: [
        "Crafted financial services applications managing credit scores for over 2 million consumers while integrating predictive risk analytics and fraud prevention techniques on AWS.",
        "Led migration of on-premise systems to AWS, ensuring zero downtime, reducing operational costs, and enabling real-time data processing through ETL pipelines and automated CI/CD pipelines (Jenkins, GitHub Actions).",
        "Spearheaded the adoption of agile DevOps practices and version control (JIRA, Git) to improve development cycles and code review efficiency by 50%.",
        "Orchestrated CI/CD automation with Jenkins, trimming deployment time by 40% and improving efficiency.",
        "Managed AWS infrastructure (EC2, S3, RDS), optimizing services to achieve 40% faster data operations and reducing operational costs.",
        "Designed a regression testing environment, reducing deployment risks by 30% and improving system stability.",
        "Applied data analytics and data mining techniques to extract valuable insights from large datasets, streamlining decision-making processes.",
        "Designed and optimized data pipelines to streamline data processing and analysis workflows, enhancing overall system efficiency.",
        "Devised 15 detailed analytical reports on customer behavior trends through intuitive dashboard designs in Power BI, empowering marketing efforts tailored specifically based on emerging patterns identified from analytics."
      ]
    },
    {
      title: "Technical Intern",
      company: "BSNL (Telecommunication)",
      location: "Chennai, India",
      period: "Dec 2020 – Apr 2021",
      type: "Internship",
      responsibilities: [
        "Analyzed operational data to reduce network downtime by 25% and improved system performance through data-driven optimizations.",
        "Executed data cleaning and preprocessing routines that optimized maintenance schedules and elevated equipment reliability by 20%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <div className="mb-4 text-sm text-gray-400 uppercase tracking-wider">
          Work History
        </div>

        {/* Section Heading */}
        <h2 className="section-heading">Professional Experience</h2>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-secondary rounded-lg overflow-hidden">
              <div className="bg-primary text-white p-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-lg">{exp.company}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 flex flex-col sm:flex-row sm:gap-6">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center mt-2 sm:mt-0">
                      <MapPinIcon className="h-5 w-5 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                {exp.type && (
                  <div className="mt-4 inline-block px-3 py-1 bg-white/20 rounded-full text-sm">
                    {exp.type}
                  </div>
                )}
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex">
                      <BriefcaseIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{resp}</span>
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
