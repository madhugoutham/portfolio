"use client";

import { Code, Database, Server, BarChart, Cloud, PenTool, Globe, Terminal } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: <Code className="h-10 w-10 mb-4 text-primary" />,
      skills: ["Python", "Java", "SQL", "C++", "Scala", "R", "iOS (Swift, Objective-C)", "Bash/Shell Scripting"]
    },
    {
      title: "Machine Learning/AI",
      icon: <Database className="h-10 w-10 mb-4 text-primary" />,
      skills: [
        "TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "XGBoost", "LightGBM", "CatBoost",
        "Transfer Learning", "Reinforcement Learning", "Natural Language Processing",
        "Deep Learning", "Feature Engineering", "Data Mining", "SHAP", "LIME", "PCA", "t-SNE", "UMAP"
      ]
    },
    {
      title: "MLOps & Deployment",
      icon: <Server className="h-10 w-10 mb-4 text-primary" />,
      skills: [
        "MLflow", "Kubeflow", "TensorFlow Extended (TFX)", "Apache Airflow", "Weights & Biases",
        "Flask", "FastAPI", "Streamlit", "CI/CD (Jenkins, GitHub Actions, GitLab CI)"
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-10 w-10 mb-4 text-primary" />,
      skills: ["HTML5", "CSS3", "JavaScript", "RESTful APIs"]
    },
    {
      title: "Big Data and ETL",
      icon: <Server className="h-10 w-10 mb-4 text-primary" />,
      skills: [
        "Apache Spark", "Hadoop", "Apache Kafka", "Apache Flink", "ETL Pipelines",
        "Data Warehousing", "Real-Time Data Processing", "Spark Streaming"
      ]
    },
    {
      title: "Cloud and DevOps",
      icon: <Cloud className="h-10 w-10 mb-4 text-primary" />,
      skills: [
        "AWS (EC2, S3, RDS, Lambda, VPC)", "CloudFormation", "Docker", "Kubernetes",
        "Microservices Architecture", "Agile/SCRUM", "Git"
      ]
    },
    {
      title: "Data Analysis & Visualization",
      icon: <BarChart className="h-10 w-10 mb-4 text-primary" />,
      skills: [
        "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Plotly", "D3.js",
        "Statistical Analysis", "Hypothesis Testing", "Regression Analysis", "Econometrics"
      ]
    },
    {
      title: "Tools and IDEs",
      icon: <Terminal className="h-10 w-10 mb-4 text-primary" />,
      skills: ["Jupyter Notebook", "Anaconda", "Eclipse", "Visual Studio", "DBeaver"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background-light">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <div className="mb-4 text-sm text-gray-400 uppercase tracking-wider">
          Expertise
        </div>

        {/* Section Heading */}
        <h2 className="section-heading">Technical Skills</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-secondary rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4">
                <div className="mb-4 md:mb-0">{category.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4 text-center md:text-left">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="bg-background text-gray-300 px-3 py-1 rounded-full text-sm whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
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
